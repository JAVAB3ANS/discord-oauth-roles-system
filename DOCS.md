# Docs for developers
You can use the discord oauth verification system as a basis to maintain your own oauth system for discord. When using however, it is essential you customize it your organizations needs. Here are a few simple things you could do to make it yours. 

## Adding your emblem & renaming
An emblem is a small visual that represents your organization. You can easily change the emblem of by uploading a `.webp` & `.ico` file in the `/static/` directory. They should be titled `discord-small.webp` & `favicon.ico`. One represents the emblem that will be displayed in the web page itself and the other would be the visual that will be displayed in your browser tab.

Regarding the `discord-small.webp` file, if you wanted to upload it with different name make sure to change the first line of code on the `dashboard.js` file. Simply change the the value of the `organizationEmblem` variable.
```js
const organizationEmblem = <YOUR_EMBLEM_PATH_NAME>;
```

## Theming
The discord oauth verification system uses vanilla CSS. If you don't want to edit the layout itself you can easily change the color of the UI by using our premade themes ([visible here](https://github.com/JAVAB3ANS/discord-oauth-roles-system/tree/master/static/theme)) or just create a new css files with the following css variables:

```css
:root{
  /* Colors are from light to dark */
  --accentColor0:#cb1f21;
  --accentColor1:#b30738;
  --accentColor2:#862633;

  --system0:rgb(50, 50, 50);
  --system1:rgb(40, 40, 40);
  --system2:rgb(35, 35, 35);
  --system3:rgb(30, 30, 30);

  --baseColor0:rgb(100, 100, 100);
  --baseColor1:rgb(70, 70, 70);

  /* Text Properties*/
  --textColor:#DDD;
  --buttonTextColor:#fff;
  --fontFamily:'Montserrat', sans-serif;
  --headingFontFamily:var(--fontFamily);
}
```

Once you chose / created you're theme, you should put it in the theme directory. With that you can add to the main.css file by importing it:
```css
@import './theme/<MY_CSS_THEME_FILE>.css';
```