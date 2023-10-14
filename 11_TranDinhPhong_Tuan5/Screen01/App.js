import { StatusBar } from 'expo-status-bar';
// import react from 'react';
import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

function HomeSCR({navigation, route}) {
    React.useEffect(() => 
    {
      if (route.params?.image)
      {
        console.log(route.params?.image);
        console.log(route.params?.gia);
        setImage(route.params.image);
        setGIa(route.params.gia);
      }
    }, [route.params?.image])
  
    const [image, setImage] = React.useState(route.params?.image || require('./assets/vs_blue.png'));
    const [gia, setGIa] = React.useState(route.params?.gia || '1.790.000');
  
      return ( 
          <View style = { styles.container1 } >
          <View style={styles.ImageContainer}>
              <Image
                  // source={require('./assets/vs_blue.png')}
                  source={image}
                  style={styles.img}
                  resizeMode='contain'
                  >
              </Image>
          </View>
  
          <View style={styles.productTitleContainer}>
              <Text style={styles.productName}>Điện Thoại Vsmart Joy 3 - Hàng chính hãng</Text>    
              <View style={styles.danhGiaContainer}>
                  <View style={styles.Starcontainer}>
                      <TouchableOpacity>
                         <Icon
                          name='star'
                          style={styles.iconStar}
                         ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity>
                         <Icon
                          name='star'
                          style={styles.iconStar}
                         ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity>
                         <Icon
                          name='star'
                          style={styles.iconStar}
                         ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity>
                         <Icon
                          name='star'
                          style={styles.iconStar}
                         ></Icon>
                      </TouchableOpacity>
                      <TouchableOpacity>
                         <Icon
                          name='star'
                          style={styles.iconStar}
                         ></Icon>
                      </TouchableOpacity>
                  </View>
                  <Text>(Xem 828 đánh giá)</Text>
              </View>
              <View style={styles.giaContainer}>
                  <Text style={styles.textGiaGoc}>{gia}</Text>
                  <Text style={styles.textGiaGiam}>1.790.000 đ</Text>
              </View>
              <View style={styles.GGContainer}>
                  <Text style={styles.text3}>Ở ĐÂU RẺ HƠN HOÀN TIỀN</Text>
                  <TouchableOpacity style={styles.btnChamHoi}>
                      <Icon
                          name='question'
                          style={styles.iconChamHoi}
                      ></Icon>
                  </TouchableOpacity>
              </View>
              <TouchableOpacity
                  style={styles.btnChonMau}
                  onPress={() => {navigation.navigate('ChooseColorScr')}}
              >
                  <Text> </Text>
                  <Text style={styles.textChonMaubtn}>4 MÀU-CHỌN MÀU</Text>
                  <Icon
                      name='arrow-right'
                      style={styles.btnChonMauIconNext}
                  >
                  </Icon>
              </TouchableOpacity>
          </View>
  
          <TouchableOpacity
              style={styles.btnMua}
  
          >
              <Text style={styles.textBtnMua}>CHỌN MUA</Text>
          </TouchableOpacity>
          </View>
      );
  }

const styles = StyleSheet.create({
    container1: {
        flex: 1,
        width: '100%',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    ImageContainer:{
        width: '100%',
        // height: '90%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    img:{
        width: 301,
        height: 361,
    },
    productTitleContainer:{
        width: '80%',
    },
    Starcontainer:{
        flexDirection: 'row',
    },
    danhGiaContainer:{
        flexDirection: 'row',
        width: '100%',
        justifyContent: 'space-between',
    },
    iconStar:{
        color: 'yellow',
        fontSize: 22,
        paddingRight: 5,
    },
    productName:{
        fontSize: 15,
        fontWeight: '400',
    },
    giaContainer: {
        flexDirection: 'row',
    },
    textGiaGoc:{
        paddingRight: '20%',
        fontWeight: '700',
        fontSize: 18,
    },
    textGiaGiam: {
        textDecorationLine: 'line-through',
        fontSize: 15,
        color: '#00000094',
        fontWeight: '700',
    },
    GGContainer:{
        flexDirection: 'row',
        marginTop: 12,
    },
    text3: {
        color: '#FA0000',
        fontSize: 12,
        fontWeight: '700',
        paddingRight: '5%',
    },
    btnChamHoi:{
        width: 20,
        height: 20,
        borderWidth: 1,
        borderRadius: '50%',
        justifyContent: 'center',
        alignItems: 'center',
    },
    iconChamHoi:{
        fontSize: 18,
        color: "#333",
    },
    btnChonMau:{
        height: 34,
        borderRadius: 5,
        borderWidth: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row',
        marginTop: '6%',
    },
    textChonMaubtn:{
        fontWeight: '400',
        fontSize: 15,
    },
    btnChonMauIconNext:{
        paddingRight: 10,
        fontSize: 15,
    },
    btnMua:{
        borderRadius: 5,
        backgroundColor: '#EE0A0A',
        width: '80%',
        height: 44,
        justifyContent: 'center',
        alignItems: 'center',
        marginBottom: '2%',
    },
    textBtnMua:{
        color: '#F9F2F2',
        fontSize: 20,
        fontWeight: 700,
    }
});

export default HomeSCR;