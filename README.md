
## How to Use this Tips pack template to create a Tips Pack
---

You can create a `Tips Pack` for [Tips](https://github.com/xmile1/tips) by

* simply cloning `https://github.com/xmile1/vscode-tips-pack-template`

    ```
    git clone git@github.com:xmile1/vscode-tips-pack-template.git your-tips-pack-name && cd your-tips-pack-name
    ```
* Replace the tips object in the [package.json](https://github.com/xmile1/vscode-tips-pack-template/blob/master/package.json) with your categories and tip content **OR** create a json file of tips like [this](https://github.com/xmile1/vscode-tips-pack-template/blob/master/sampleTips.json) and run `node injectTips filepath=path/to/your/tips.json`
* Update all other personal details in the pacakge.json
* Remove this section of the readme and update the other sections
* [Publish](https://code.visualstudio.com/docs/extensions/publish-extension) your Tips Pack to vscode marketplace

---


# Example-javascript-tips-pack (README Template)

This is an example README of a Tips pack containing javascript tips.

## Tips

See the tips property of [package.json]() for the tips available in this pack

## Installation

you need to first install [Tips](https://github.com/xmile1/tips)

then 

Inside VSCode, press Cmd + P (Windows: Ctrl+P), and enter:
type `ext install example-javascript-tips-pack`
Install the tip


## Tips Pack Categories

List the categories of the tips pack so users can use them for blacklisting or whitelisting in the `Tip` extension
* `javascript`
* `es6`

**Enjoy!**