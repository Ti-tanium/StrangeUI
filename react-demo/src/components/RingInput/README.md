# RingInput 环形数字输入
For number selecting.

## Dependency

RingInput is based on RingProgress. So, include RingProgress in your project, if you want to use this component.

Also, the `plus` and `minus` icons are from `FontAwesome`. The following dependencies are required.

```she
yarn add @fortawesome/fontawesome-svg-core
yarn add @fortawesome/free-solid-svg-icons
yarn add @fortawesome/react-fontawesome
```



## UI

![RingInput-Demonstration](assets/RingInput-Demonstration.gif)

## API

| props           | Description                                                | Type                       | Default Value                                                |
| --------------- | ---------------------------------------------------------- | -------------------------- | ------------------------------------------------------------ |
| width           | width of the ring ('px' as unit)                           | Number                     | 100                                                          |
| radius          | thickness of the ring (px as unit)                         | Number                     | 5                                                            |
| defaultValue    | default value of the number input                          | Number                     | 0                                                            |
| range           | range of the number input.                                 | Array of number(inclusive) | [0,10]                                                       |
| stepLength      | increment of each increase or decrease                     | Number                     | 1                                                            |
| onChange        | callback function, the only parameter is the current value | Function                   |                                                              |
| backgroundColor | Color of the unfilled parts                                | String (hex color)         | ![image-20200902185653548](assets/image-20200902185653548.png) #dadada, light gray |
| barColor        | Color of the progress bar                                  | String(hex color)          | ![image-20200902185554797](assets/image-20200902185554797.png) \#79BEDB  light blue |

## Code Example

```js
const [value, SetValue] = useState(defaultValue)

const handleChange = (value) => {
    console.log(value);
    setValue(value)
}

<RingInput range={[0, 100]} stepLength={10} onChange={handleChange}></RingInput>
```



## How it works

[The ring is based on `svg`](../RingProgress/README.md#how-it-works). The only challenge while implementing `RingInput` is that the `svg` element always appears in front of other `DOM` elements. Therefore, the ring blocked the plus button and the minus button, which means the users cannot interact with `RIngInput`. The solution is to set the `pointer-events` property to `none`.  In React, the following code would work.

```html
<svg xmlns="http://www.w3.org/2000/svg" pointerEvents="none"></svg>
```

The **pointer**-**events** property allows for control over how HTML elements respond to mouse/touch events – including CSS hover/active states, click/tap events in Javascript, and whether or not the cursor is visible.

