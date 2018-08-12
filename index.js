import PropTypes from "prop-types";
import React, { Component } from "react";
import { View, Modal, TouchableOpacity, StyleSheet } from "react-native";

class Modalbox extends Component {
  static propTypes = {
    animation: PropTypes.string
  };

  static defaultProps = {
    animation: "fade"
  };

  constructor(props) {
    super(props);

    this.state = {
      modalVisible: false
    };

    this.toggleVisible = this.toggleVisible.bind(this);
  }

  toggleVisible() {
    this.setState({
      modalVisible: !this.state.modalVisible
    });
  }

  render() {
    return (
      <View>
        <Modal
          animationType={this.props.animation}
          transparent
          visible={this.state.modalVisible}
          supportedOrientations={['portrait', 'landscape']}
          onRequestClose={() => {
            this.setState({ modalVisible: false });
          }}
        >
          <TouchableOpacity
            activeOpacity={1}
            onPress={() => {
              this.toggleVisible();
            }}
            style={styles.modal}
          >
            <View style={styles.body}>{this.props.children}</View>
          </TouchableOpacity>
        </Modal>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: "#fff",
    width: "95%",
    height: "auto",
    elevation: 2,
    borderRadius: 3,
    padding: 10
  },
  modal: {
    backgroundColor: "rgba(0,0,0,0.6)",
    flex: 1,
    alignItems: "center",
    justifyContent: "center"
  }
});

export default Modalbox;
