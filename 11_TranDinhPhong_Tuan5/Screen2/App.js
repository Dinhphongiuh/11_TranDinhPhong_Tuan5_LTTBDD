// import { StatusBar } from 'expo-status-bar';
import * as React from 'react';
import { StyleSheet, Text, Image, View, TouchableOpacity } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function ChooseColorSCR({navigation, route}) {
  const [image, setImage] = React.useState(require('./assets/vs_blue.png'));
  const [colorText, setColorText] = React.useState('');
  const [ncc, setNcc] = React.useState('');
  const [gia, setGia] = React.useState('');
  const [selectedColor, setSelectedColor] = React.useState(null);

  return (
    <View style={styles.container}>
      <View style={styles.ProductContainer}>
        <View style={styles.imgContainer}>
          <Image
            source={image}
            style={styles.imgPhone}
            resizeMode='contain'
          ></Image>
        </View>
        <View style={styles.productProperties}>
          <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 Hàng chính hãng</Text>
          <Text style={styles.ColorText}>{colorText}</Text>
          <Text style={styles.ColorNCC}>{ncc}</Text>
          <Text style={styles.ColorTextGia}>{gia}</Text>
        </View>
      </View>

      <View style={styles.ContainerChooseColor}>
        <Text style={styles.textColorChoose}>Chọn một màu bên dưới:</Text>
        <View style={styles.ColorChoose}>
          <TouchableOpacity
            style={styles.color1}
            onPress={()=>{
              setImage(require('./assets/vs_silver.png'));
              setColorText('Màu: Sliver');
              setNcc('Cung cấp bởi Tiki Tradding');
              setGia('1.690.000 đ');
            }}
          >
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.color2}
            onPress={()=>{
              setImage(require('./assets/vs_red.png'));
              setColorText('Màu: đỏ');
              setNcc('Cung cấp bởi Tiki Tradding');
              setGia('1.700.000 đ');
            }}
          >
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.color3}
            onPress={()=>{
              setImage(require('./assets/vs_black.png'));
              setColorText('Màu: đen');
              setNcc('Cung cấp bởi Tiki Tradding');
              setGia('1.690.000 đ');
            }}
          >
            
          </TouchableOpacity>
          <TouchableOpacity
            style={styles.color4}
            onPress={()=>{
              setImage(require('./assets/vs_blue.png'));
              setColorText('Màu: xanh');
              setNcc('Cung cấp bởi Tiki Tradding');
              setGia('1.790.000 đ');
            }}
          >
            
          </TouchableOpacity>
        </View>
        <View style={styles.btnDoneContainer}>
          <TouchableOpacity
            style={styles.DoneBtn}
            onPress={()=> {navigation.navigate('Home', {image, gia})}}
          >
            <Text style={styles.btnTextDone}>XONG</Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
  },
  ProductContainer: {
    width: '90%',
    height: '30%',
    flexDirection: 'row',
    
  },
  imgContainer:{
    width: '45%',
    padding: 10,
  },
  imgPhone:{
    width: '100%',
    height: '100%',
  },
  productProperties:{
    width: '60%',
  },
  productName:{
    fontWeight: '400',
    fontSize: 15,
    marginTop: '10%',
    // width: '60%',
  },
  ContainerChooseColor: {
    width: '100%',
    height: '100%',
    backgroundColor: '#C4C4C4',
  },
  textColorChoose:{
    fontSize: 18,
    fontWeight: '400',
    padding: 12,
  },
  ColorChoose:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  color1:{
    width: 85,
    height: 80,
    backgroundColor: '#C5F1FB',
    marginBottom: 15,
  },
  color2:{
    width: 85,
    height: 80,
    backgroundColor: '#F30D0D',
    marginBottom: 15,
  },
  color3:{
    width: 85,
    height: 80,
    backgroundColor: '#000000',
    marginBottom: 15,
  },
  color4:{
    width: 85,
    height: 80,
    backgroundColor: '#234896',
    marginBottom: 15,
  },
  btnDoneContainer:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    height: '5%',
  },
  DoneBtn:{
    width: '90%',
    backgroundColor: '#1952E294',
    borderRadius: 5,
    height: 44,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1,
    borderColor: '#CA1536',
  },
  btnTextDone:{
    fontSize: 20,
    fontWeight: '700',
    color: '#F9F2F2',
  },
  ColorTextGia:{
    marginTop: 10,
    fontSize: 18,
    fontWeight: '700',
  }
});

export default ChooseColorSCR;