#Growing textarea react component

React component that creates a textarea that increases it's height in order to neatly contain its text content.

##Usage

```jsx
<GrowingTextarea 
    ref="input"
    className="no-flow autosave" 
    value={this.state.value}
    onChange={this.handle_change}
/>
```