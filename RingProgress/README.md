# RingProgress 环形进度条

## UI

![image-20200902190813077](assets/image-20200902190813077.png)

## API

| props           | Description                               | Type               | Default Value                                                |
| --------------- | ----------------------------------------- | ------------------ | ------------------------------------------------------------ |
| width           | width of the ring ('px' as unit)          | Number             | 100                                                          |
| radius          | thickness of the ring (px as unit)        | Number             | 5                                                            |
| progress        | percentage of filled parts(range: [0,1]). | Number             | 0                                                            |
| backgroundColor | Color of the unfilled parts               | String (hex color) | ![image-20200902185653548](assets/image-20200902185653548.png) #dadada, light gray |
| barColor        | Color of the progress bar                 | String(hex color)  | ![image-20200902185554797](assets/image-20200902185554797.png) \#79BEDB  light blue |



## How it works

The ring is based on `svg`.  Two circles are involved, one for the background and the other for the bar.  The ring is dashed into parts by the [`strokeDasharray`props](https://css-tricks.com/almanac/properties/s/stroke-dasharray/), and the length of the ring bar is controlled by the `strokeDashoffset` props of the `circle` element.  



## Example

```js
<RingProgress progress={0.8}></RingProgress>
```

