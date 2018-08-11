# react-native-modal
A simple <Modal/> component for React-native, support Android and IOS

## Usage example
```jsx
<Button onPress={() => this.refs.modal1.toggleVisible()}>Basic modal</Button>

<Modalbox ref="modal1" modalVisible={this.state.buyModalVisible}>
    <Text>test</Text>
</Modalbox>
```
