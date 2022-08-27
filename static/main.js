async function getGuildAvatar(guildID, iconID) {
    console.log("Getting guild icon.")
    let path;

    // checks if the icon is animated or not
    if (/^a_/.test(iconID)) {
        path = `icons/${guildID}/${iconID}.gif`
    } else {
        path = `icons/${guildID}/${iconID}.png`
    }
    let imageTxt = await fetch(`/images/${path}`).then(val => val.text(), () => "discord-small.png");
    console.log(`image path is :${imageTxt}`);
    return imageTxt;
}

window.onload = async function() {
    const iconId = Deno.env.get("GUILD_ICON") ?? ""
    let guildImageURL = await getGuildAvatar(Deno.env.get("GUILD_ID") ?? "", iconId);
    document.getElementById("guild-icon").setAttribute("src", guildImageURL);
} 