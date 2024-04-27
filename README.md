# tailwind.config.jsにカスタムプロパティ(変数)を使う

【作成環境】
--------------------
- - Windows 11 
- - Node.js
- - Nextjs
- - Tailwind CSS
---------------------
### 【例1】カスタムクラス名のvalueに数値(8pxや16px)をベタ書き
 ```js:tailwind.config.ts
borderRadius: {
        myLg: "8px",
        myMd: "16px",
}
```

### 【例2】カスタムクラス名のvalueにcssのカスタムプロパティ(変数)--my-radiusを使用
- globals.cssにカスタムプロパティの宣言と初期化

 ```js:tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'myLg': "var(--my-radius)", 
        'myMd': "calc(var(--my-radius) - 2px)",
        'mySm': "calc(var(--my-radius) - 4px)",
      },
      fontSize: {
        'myXs': 'calc(var(--my-size) * 1)',
        'mySm': 'calc(var(--my-size) * 2)',
        'myBase': 'calc(var(--my-size) * 3)',
        'myLg': 'calc(var(--my-size) * 4)',
        'myXl': 'calc(var(--my-size) * 5)',
        'my2xl': 'calc(var(--my-size) * 6)',
        'my3xl': 'calc(var(--my-size) * 7)',
      },
    },
  },
  plugins: [require("@headlessui/tailwindcss")],
};
export default config;

```
```css:scr/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

@layer base {
  :root {
    --my-radius: 0.5rem;
    --my-size: .75rem;
  }
}
```
```tsx:scr/page.tsx
import Head from "next/head";

export default function Home() {
  const title = "Next.js page";

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <section>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-myLg">
          Click me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-mySm">
          Click me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[var(--my-radius)]">
          Click me
        </button>
        <div className="container">
          <h1 className="text-my2xl">Hello TailwindCSS</h1>
          <p className="text-myLg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-myXs">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
    </div>
  );
}
```
### 【例3】カスタムクラス名のvalueにtailwindcssのカスタムプロパティ(変数)--my-radiusを使う
- js:tailwind.config.tsにaddBase関数を使ってカスタムプロパティの宣言と初期化
- 利点: tailwind.config.tsファイル1つでクローズできる

 ```js:tailwind.config.ts
import type { Config } from "tailwindcss";

const plugin  = require('tailwindcss/plugin');

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      borderRadius: {
        'myLg': "var(--my-radius)", 
        'myMd': "calc(var(--my-radius) - 2px)",
        'mySm': "calc(var(--my-radius) - 4px)",
      },
      fontSize: {
        'myXs': 'calc(var(--my-size) * 1)',
        'mySm': 'calc(var(--my-size) * 2)',
        'myBase': 'calc(var(--my-size) * 3)',
        'myLg': 'calc(var(--my-size) * 4)',
        'myXl': 'calc(var(--my-size) * 5)',
        'my2xl': 'calc(var(--my-size) * 6)',
        'my3xl': 'calc(var(--my-size) * 7)',
      },
    },
  },
  plugins: [
    require("@headlessui/tailwindcss"),
    plugin(({ addBase }: { addBase: (styles: Record<string, Record<string, string>>) => void }) => {
      addBase({
        ':root': {
          '--my-radius': '0.5rem',
          '--my-size': '.75rem',
        },
      })
    }),
  ],
};
export default config;
```
```css:scr/globals.css
@tailwind base;
@tailwind components;
@tailwind utilities;

/*コメントアウト必須
@layer base {
  :root {
    --my-radius: 0.5rem;
    --my-size: .75rem;
  }
}
*/
```
```tsx:scr/page.tsx
import Head from "next/head";

export default function Home() {
  const title = "Next.js page";

  return (
    <div>
      <Head>
        <title>{title}</title>
      </Head>

      <section>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-myLg">
          Click me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-mySm">
          Click me
        </button>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-[var(--my-radius)]">
          Click me
        </button>
        <div className="container">
          <h1 className="text-my2xl">Hello TailwindCSS</h1>
          <p className="text-myLg">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
          <p className="text-myXs">Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
        </div>
      </section>
    </div>
  );
}
```