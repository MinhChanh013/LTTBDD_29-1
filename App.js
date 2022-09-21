import { StatusBar } from "expo-status-bar";
import React from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  TextInput,
} from "react-native";

export default function App() {
  const [mount, setMount] = React.useState(1);

  const handelNext = () => {
    setMount(mount + 1);
  };

  const handelPrev = () => {
    if (mount === 0) {
      setMount(0);
    } else setMount(mount - 1);
  };
  return (
    <View style={styles.container}>
      <View style={styles.container__infor}>
        <View style={styles.containenr__infor_content}>
          <Image
            style={styles.tinyLogo}
            source={require("./assets/book.png")}
          />
          <View style={styles.containenr_content__text}>
            <Text style={styles.content__text_title}>
              Nguyên hàm tích phân và ứng dụng
            </Text>
            <Text style={styles.content__text_title}>
              Cung cấp bởi Tiki Trading
            </Text>
            <Text style={styles.content__text_money}>141.800 đ</Text>
            <Text style={styles.content__text_moneyold}>
              <Text>141.800 đ</Text>
              <Text style={styles.content__line_moneyold}></Text>
            </Text>
            <View style={styles.control_main}>
              <View style={styles.content__control}>
                <TouchableOpacity
                  style={styles.content__control_button}
                  onPress={() => handelPrev()}
                >
                  <Text>-</Text>
                </TouchableOpacity>
                <Text style={styles.content__text_ammount}>{mount}</Text>
                <TouchableOpacity
                  style={styles.content__control_button}
                  onPress={() => handelNext()}
                >
                  <Text>+</Text>
                </TouchableOpacity>
              </View>
              <Text style={styles.content__control_buy}>Mua sau</Text>
            </View>
          </View>
        </View>
        <View style={styles.container__infor_gift}>
          <Text style={styles.content__text_title}>Mã giảm giá đã lưu</Text>
          <Text style={styles.content__control_buy}>Xem tại đây</Text>
        </View>
        <View style={styles.container__infor_applyGift}>
          <TextInput
            style={styles.input__appyle_gift}
            placeholder="Mã giảm giá"
            placeholderTextColor="#011627"
          ></TextInput>
          <TouchableOpacity style={styles.apply_btn}>
            <Text style={styles.apply_text_gift}>Áp dụng</Text>
          </TouchableOpacity>
        </View>
      </View>
      <View style={styles.container__buy}>
        <View style={{}}>
          <View
            style={{
              backgroundColor: "#fff",
              marginTop: 10,
              padding: "4%",
              flexDirection: "row",
            }}
          >
            <Text style={{ fontWeight: "700", fontSize: 14, marginRight: 5 }}>
              Bạn có phiếu quà tặng Tiki/Got it/ Urbox?
            </Text>
            <Text style={{ fontWeight: "700", fontSize: 14, color: "#134FEC" }}>
              Nhập tại đây?
            </Text>
          </View>
          <View
            style={{
              backgroundColor: "#fff",
              marginTop: 20,
              padding: "4%",
              flexDirection: "row",
              justifyContent: "space-between",
            }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#011627" }}>
              Tạm tính
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#EE0D0D" }}>
              {141800 * mount} đ
            </Text>
          </View>
        </View>
        <View style={{ backgroundColor: "#fff", padding: "4%" }}>
          <View
            style={{ flexDirection: "row", justifyContent: "space-between" }}
          >
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#011627" }}>
              Thành tiền
            </Text>
            <Text style={{ fontSize: 20, fontWeight: "800", color: "#EE0D0D" }}>
              {141800 * mount} đ
            </Text>
          </View>
          <TouchableOpacity
            style={{
              width: "100%",
              backgroundColor: "#E53935",
              padding: 15,
              marginTop: 8,
              borderRadius: 3,
            }}
          >
            <Text
              style={{
                color: "#fff",
                textAlign: "center",
                fontSize: 18,
                fontWeight: "800",
              }}
            >
              TIẾN HÀNH ĐẶT HÀNG
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    backgroundColor: "#C4C4C4",
  },
  container__infor: {
    flex: 1,
    width: "100%",
    backgroundColor: "#Fff",
    padding: "4%",
  },
  container__buy: {
    flex: 1.5,
    width: "100%",
    justifyContent: "space-between",
  },
  containenr__infor_content: {
    flexDirection: "row",
  },
  containenr_content__text: {
    position: "relative",
    paddingLeft: 20,
  },

  content__text_title: {
    fontSize: 15,
    fontWeight: "800",
    marginTop: 6,
    marginRight: 10,
  },

  content__text_money: {
    fontSize: 20,
    color: "#EE0D0D",
    fontWeight: "800",
    marginTop: 6,
  },

  content__text_moneyold: {
    fontSize: 16,
    color: "#808080",
    marginTop: 6,
    position: "relative",
  },

  content__line_moneyold: {
    position: "absolute",
    left: 0,
    top: 0,
    width: "100%",
    height: 1,
    backgroundColor: "#808080",
    color: "#808080",
  },

  control_main: {
    flexDirection: "row",
    justifyContent: "space-between",
  },
  content__control: {
    flexDirection: "row",
    marginTop: 6,
  },

  content__control_button: {
    padding: 2,
    paddingLeft: 6,
    paddingRight: 6,
    marginRight: 8,
    backgroundColor: "#C4C4C4",
  },

  content__text_ammount: {
    marginRight: 8,
    fontSize: 17,
    fontWeight: "700",
  },

  content__control_buy: {
    color: "#134FEC",
    fontWeight: "700",
  },
  container__infor_gift: {
    marginTop: 20,
    flexDirection: "row",
  },
  container__infor_applyGift: {
    flexDirection: "row",
    marginTop: 20,
    justifyContent: "space-between",
    alignItems: "center",
  },

  input__appyle_gift: {
    padding: 10,
    borderWidth: 1,
    width: "70%",
    borderRadius: 4,
    fontSize: 18,
  },

  apply_btn: {
    padding: 12,
    backgroundColor: "#0A5EB7",
  },

  apply_text_gift: {
    fontSize: 20,
    color: "#fff",
  },
});
