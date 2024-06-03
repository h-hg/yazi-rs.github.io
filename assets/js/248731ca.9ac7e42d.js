"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[175],{9328:(e,i,s)=>{s.r(i),s.d(i,{assets:()=>l,contentTitle:()=>t,default:()=>d,frontMatter:()=>n,metadata:()=>a,toc:()=>c});var o=s(1527),r=s(6225);const n={id:"overview",sidebar_position:0,sidebar_label:"Flavors (BETA)",description:"Learn how to use Yazi flavors."},t="Flavors (BETA)",a={id:"flavors/overview",title:"Flavors (BETA)",description:"Learn how to use Yazi flavors.",source:"@site/docs/flavors/overview.md",sourceDirName:"flavors",slug:"/flavors/overview",permalink:"/docs/flavors/overview",draft:!1,unlisted:!1,editUrl:"https://github.com/yazi-rs/yazi-rs.github.io/edit/main/docs/flavors/overview.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{id:"overview",sidebar_position:0,sidebar_label:"Flavors (BETA)",description:"Learn how to use Yazi flavors."},sidebar:"docsSidebar",previous:{title:"Config",permalink:"/docs/plugins/config"},next:{title:"DDS",permalink:"/docs/dds"}},l={},c=[{value:"Directory structure",id:"structure",level:2},{value:"Usage",id:"usage",level:2},{value:"Cooking a flavor",id:"cooking",level:2}];function h(e){const i={a:"a",code:"code",h1:"h1",h2:"h2",li:"li",p:"p",pre:"pre",ul:"ul",...(0,r.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(i.h1,{id:"flavors-beta",children:"Flavors (BETA)"}),"\n",(0,o.jsxs)(i.p,{children:['The "flavor" is a pre-made Yazi theme, while what we typically refer to as a "theme" is the user\'s own theme, i.e. ',(0,o.jsx)(i.code,{children:"~/.config/yazi/theme.toml"})," file."]}),"\n",(0,o.jsx)(i.p,{children:"The purpose of separating them is to allow users to customize their preferences more conveniently on top of an existing flavor, without having to modify those flavor files.\nThis makes it easier to update, as there won't be conflicts when pulling from Git."}),"\n",(0,o.jsxs)(i.p,{children:["Behind the scenes, Yazi merges the user's ",(0,o.jsx)(i.code,{children:"theme.toml"})," with the flavor's ",(0,o.jsx)(i.code,{children:"flavor.toml"})," automatically, and the user's always takes precedence over the flavor."]}),"\n",(0,o.jsx)(i.h2,{id:"structure",children:"Directory structure"}),"\n",(0,o.jsxs)(i.p,{children:["These flavors are placed in the ",(0,o.jsx)(i.code,{children:"flavors"})," subdirectory of the Yazi configuration directory, so either:"]}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"~/.config/yazi/flavors/"})," on Unix-like systems."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"C:\\Users\\USERNAME\\AppData\\Roaming\\yazi\\config\\flavors\\"})," on Windows."]}),"\n"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"~/.config/yazi/\n\u251c\u2500\u2500 flavors/\n\u2502\xa0\xa0 \u251c\u2500\u2500 foo.yazi/\n\u2502\xa0\xa0 \u2514\u2500\u2500 bar.yazi/\n\u2514\u2500\u2500 theme.toml\n"})}),"\n",(0,o.jsxs)(i.p,{children:["Each flavor is a directory with a ",(0,o.jsx)(i.a,{href:"https://developer.mozilla.org/en-US/docs/Glossary/Kebab_case",children:"kebab-case"})," name, ending in ",(0,o.jsx)(i.code,{children:".yazi"}),", and containing at least the following files:"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{children:"~/.config/yazi/flavors/bar.yazi/\n\u251c\u2500\u2500 flavor.toml\n\u251c\u2500\u2500 tmtheme.xml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 preview.png\n\u251c\u2500\u2500 LICENSE\n\u2514\u2500\u2500 LICENSE-tmtheme\n"})}),"\n",(0,o.jsx)(i.p,{children:"Where:"}),"\n",(0,o.jsxs)(i.ul,{children:["\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"flavor.toml"})," is this flavor's configuration file, in the format consistent with the ",(0,o.jsxs)(i.a,{href:"/docs/configuration/theme",children:["user's ",(0,o.jsx)(i.code,{children:"theme.toml"})]}),"."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"tmtheme.xml"})," is a ",(0,o.jsx)(i.a,{href:"https://www.sublimetext.com/docs/color_schemes_tmtheme.html",children:"tmTheme file"})," that matches the colors of this flavor for code highlighting."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"README.md"})," and ",(0,o.jsx)(i.code,{children:"preview.png"})," are the description and the preview image of this flavor, respectively."]}),"\n",(0,o.jsxs)(i.li,{children:[(0,o.jsx)(i.code,{children:"LICENSE"})," and ",(0,o.jsx)(i.code,{children:"LICENSE-tmtheme"})," are the licenses for the flavor and the ",(0,o.jsx)(i.code,{children:"tmtheme.xml"})," file, respectively."]}),"\n"]}),"\n",(0,o.jsx)(i.h2,{id:"usage",children:"Usage"}),"\n",(0,o.jsxs)(i.p,{children:["For example, if you want to use the ",(0,o.jsx)(i.code,{children:"bar.yazi"})," flavor, add these lines to your ",(0,o.jsx)(i.code,{children:"theme.toml"}),":"]}),"\n",(0,o.jsx)(i.pre,{children:(0,o.jsx)(i.code,{className:"language-toml",children:'[flavor]\nuse = "bar"\n'})}),"\n",(0,o.jsx)(i.h2,{id:"cooking",children:"Cooking a flavor"}),"\n",(0,o.jsxs)(i.p,{children:["Please use our ",(0,o.jsx)(i.a,{href:"https://github.com/yazi-rs/flavor-template",children:"flavor-template"})," repository as a starting point to create your own flavor."]})]})}function d(e={}){const{wrapper:i}={...(0,r.a)(),...e.components};return i?(0,o.jsx)(i,{...e,children:(0,o.jsx)(h,{...e})}):h(e)}},6225:(e,i,s)=>{s.d(i,{Z:()=>a,a:()=>t});var o=s(959);const r={},n=o.createContext(r);function t(e){const i=o.useContext(n);return o.useMemo((function(){return"function"==typeof e?e(i):{...i,...e}}),[i,e])}function a(e){let i;return i=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:t(e.components),o.createElement(n.Provider,{value:i},e.children)}}}]);