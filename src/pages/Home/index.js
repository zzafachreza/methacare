import { Alert, StyleSheet, Text, View, Image, FlatList, ActivityIndicator, Dimensions, ImageBackground, TouchableWithoutFeedback, TouchableNativeFeedback, Linking } from 'react-native'
import React, { useState, useEffect, useRef } from 'react'
import { SafeAreaView } from 'react-native-safe-area-context'
import { apiURL, getData, MYAPP, storeData } from '../../utils/localStorage';
import { colors, fonts, windowHeight, windowWidth } from '../../utils';
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler';
import { Icon } from 'react-native-elements/dist/icons/Icon';
import { useIsFocused } from '@react-navigation/native';
import axios from 'axios';
import 'intl';
import 'intl/locale-data/jsonp/en';
import moment from 'moment';
import 'moment/locale/id';
import MyCarouser from '../../components/MyCarouser';
import { Rating } from 'react-native-ratings';

export default function Home({ navigation, route }) {





  const [user, setUser] = useState({});
  const isFocus = useIsFocused();
  const [data, setData] = useState([]);
  const [open, setOpen] = useState(false);
  const [comp, setComp] = useState({});

  const _getTransaction = async () => {

    await getData('user').then(u => {
      setUser(u);
    })

    await axios.post(apiURL + 'company').then(res => {

      setComp(res.data.data);

    });

    await axios.post(apiURL + 'menu').then(res => {

      console.log(res.data);
      setData(res.data);

    });
  }


  useEffect(() => {
    if (isFocus) {
      _getTransaction();
    }
  }, [isFocus]);

  const __renderItem = ({ item }) => {
    return (
      <TouchableWithoutFeedback onPress={() => navigation.navigate(item.modul, item)}>
        <View style={{
          flex: 1,
          padding: 10,
          borderWidth: 1,
          borderRadius: 10,
          justifyContent: 'center',
          alignItems: 'center',
          borderColor: colors.secondary,
          // backgroundColor: colors.white,
          margin: 5,
          height: windowHeight / 8,
        }}>

          <Image source={{
            uri: item.image
          }} style={{
            // flex: 1,
            width: 40,
            height: 40,
            resizeMode: 'contain'
          }} />
          <Text style={{
            marginTop: 10,
            fontFamily: fonts.secondary[600],
            fontSize: 8,
            color: colors.secondary,
            textAlign: 'center'
          }}>{item.judul}</Text>
        </View>
      </TouchableWithoutFeedback>
    )
  }


  return (

    <SafeAreaView style={{
      flex: 1,
      backgroundColor: colors.white,
      position: 'relative'
    }}>

      <View style={{
        position: 'absolute',
        top: 0,
        right: 0,
        zIndex: 0
      }}>
        <Image source={require('../../assets/top2.png')} style={{
          width: 100,
          height: 140,
        }} />
      </View>




      <View style={{
        flex: 1,
        paddingHorizontal: 10,
      }}>

        <ScrollView style={{
          paddingHorizontal: 10,
        }} showsVerticalScrollIndicator={false}>
          <View style={{
            padding: 20,
            marginTop: 30,
            marginBottom: 20,
            borderWidth: 1,
            marginHorizontal: 20,
            borderRadius: 10,
            borderColor: colors.border,
            backgroundColor: colors.white
          }}>
            <Text style={{
              fontFamily: fonts.secondary[600],
              fontSize: 20,
            }}>Hi, {user.nama_lengkap}</Text>
          </View>
          <View style={{
            justifyContent: 'center',
            alignItems: 'center',
            padding: 10,
            zIndex: -10
          }}>
            <Image source={require('../../assets/home.png')} style={{
              width: '80%',
              resizeMode: 'contain'
            }} />
          </View>
          <Text style={styles.tulisan}>Mengenali emosi diri sendiri adalah kemampuan untuk mengenali perasaan sewaktu perasaan itu terjadi. Kemampuan ini merupakan dasar dari kecerdasan emosional, para ahli psikologi menyebutkan kesadaran diri sebagai metamood, yakni kesadaran seseorang akan emosinya sendiri. Kesadaran diri memang belum menjamin penguasaan emosi, namun merupakan salah satu prasyarat penting untuk mengendalikan emosi sehingga individu mudah menguasai emosi</Text>
          <Text style={styles.tulisan}>Menurut Paul Ekman, psikolog dan peneliti yang melakukan survey pada sekitar 100 orang peneliti untuk mendapatkan masukan dari mereka mengembangkan suatu konsep yang dinamakan Atlas of Emotions. Konsep ini mengurai emosi menjadi lima kategori utama, seperti berikut ini:
          </Text>
          <Text style={styles.tulisanJudul}>⦁	Marah</Text>
          <Text style={styles.tulisan}>Marah biasanya timbul ketika Anda merasasuatu ketidakadilan. Pengalaman seperti ini membuat Anda merasa terancam, terjebak dan tidak bisa membela diri. Banyak orang berpikir jika marah adalah hal negatif, padahal marah adalah emosi normal yang berperan membantu Anda mengenali situasi ketika situasi tersebut brubah menjadi racun dan merusak.
          </Text>
          <Text style={styles.tulisan}>Ada banyak cara untuk mengatasi rasa marah dan banyak juga cara yang menimbulkan dampak buruk bagi Anda juga orang di sekeliling Anda. Jika suatu saat Anda merasa marah, cobalah untuk mengatasi marah dengan cara yang lebih produktif. Misalnya, ketika Anda merasa marah karena merasa diperlakukan tidak adil oleh atasan Anda, maka fokuslah pada mencari solusi untuk membuktikan bahwa perlakuan atasan Anda itu tidak pada tidak pada tempatnya.
          </Text>
          <Text style={styles.tulisan}>Marah seringkali sulit untuk diatasi karena marah membuat orang merasa tidak berdaya. Mungkin Anda tidak bisa memperbaiki secara keseluruhan situasi yang membuat Anda marah tetapi Anda bisa melakukan perbaikan yang membuat situasi lebih baik.
          </Text>
          <Text style={styles.tulisanJudul}>⦁	Takut</Text>
          <Text style={styles.tulisan}>Rasa takut akan muncul ketika Anda merasa terancam oleh suatu hal. Ingatlah bahwa kadar takut yang Anda rasakan tidak selalu berbanding lurus dengan intensitas ancaman tersebut. Misalnya, ketika Anda hidup dalam kegelisahan, Anda mungkin merasa takut berada dalam situasi yang sebenarnya tidak menimbulkan banyak ancaman.
          </Text>
          <Text style={styles.tulisan}>Takut adalah jenis emosi yang normal namun ada hal yang bisa Anda lakukan ketika Anda merasa takut yaitu dengan mengkonfrontasi takut, bukan menghindarinya. Misalnya, ketika Anda merasa takut saat akan bertemu dengan orang baru, adalah alami jika Anda berusaha menghindari sumber rasa takut itu. Tetapi, sikap seperti ini malah akan membuat rasa takut semakin menjadi. Berpikirlah secara logis dan pikirkan apakah yang Anda takutkan benar-benar akan melukai Anda? Dengan memikirkan secara logis Anda bisa mengukur seberapa besar ketakutan Anda dan bagaimana Anda bisa mengendalikannya.
          </Text>
          <Text style={styles.tulisanJudul}>⦁	Sedih</Text>
          <Text style={styles.tulisan}>Setiap orang pernah sedih. Setiap kita sedih dari waktu ke waktu. Emosi sedih ini terkait pada peristiwa spesifik seperti kehilangan atau penolakan. Namun di kasus lain, Anda kadang merasa sedih tanpa alasan. Ketika Anda berduka, hal ini adalah normal. Setiap orang berduka dengan caranya sendiri. Ada bagusnya membicarakan sakit yang sedang Anda dengan orang lain, namun ada bagusnya juga untuk menikmati rasa itu, menerimanya dan mengekspresikannya dengan cara kreatif, misalnya membantu orang yang butuh pertolongan atau menyelesaikan pekerjaan yang belum diselesaikan oleh orang yang Anda sayangi.
          </Text>
          <Text style={styles.tulisanJudul}>⦁	Jijik</Text>
          <Text style={styles.tulisan}>Biasanya orang mengalami rasa jijik sebagai reaksi atas situasi yang tidak menyenangkan atau tidak diinginkan. Sama seperti marah, rasa jijik bisa membantu melindungi kita dari hal-hal yang kita hindari. Namun begitu, rasa ini bis amenimbulkan masalah jika memicu rasa jijik pada orang tertentu, termasuk pada diri sendiri, atau situasi yang sebenarnya tidak terlalu buruk bagi kita.
          </Text>
          <Text style={styles.tulisan}>Rasa jijik bisa terjadi sebagai respon alami atas hal yang tidak kita sukai. Dala beberapa situasi, Anda mungkin ingin melalui pengalaman ini atau mengatasinya dengan segera. Contoh sikap yang bisa Anda lakukan untuk mengatasi rasa jijik ini misalnya dengan belajar tentang cinta kasih, menyayangi orang yang sedang dalam kesusahan dengan cara berempati pada kondisi mereka. Atau Anda bisa fokus pada perilaku seseorang ketika Anda merasa jijik pada mereka, karena sebenarnya yang tidak Anda sukai adalah perilakunya bukan pribadinya.
          </Text>
          <Text style={styles.tulisanJudul}>⦁	Senang</Text>
          <Text style={styles.tulisan}>Emosi yang satu ini paling rasanya paling banyak disukai oleh kita. Orang biasanya merasa bahagia, tenang, dan menyenangkan, lalu mengekspresikan perasaan ini dengan tersenyum, tertawa, atau memanjakan diri sendiri.  Anda akan merasa senang ketika Anda merasa dekat dan terkoneksi dengan orang yang Anda sayang, ketika merasa aman, melakukan suatu hal yang memicu sensor kesenangan di dalam tubuh, terserap dalam kegiatan yang disukai, atau juga ketika Anda merasa rileks dan damai.
          </Text>

        </ScrollView>
      </View>
      {/* navigation bottom */}
      <View style={{
        height: 50,
        borderRadius: 10,
        marginHorizontal: 10,
        marginBottom: 10,
        alignItems: 'center',
        flexDirection: 'row',
        backgroundColor: colors.secondary,
        justifyContent: 'space-around'
      }}>
        <TouchableOpacity style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='home' color={colors.white} size={20} />


        </TouchableOpacity>

        <TouchableOpacity onPress={() => navigation.navigate('Feature')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='grid' color={colors.white} size={20} />


        </TouchableOpacity>



        <TouchableOpacity onPress={() => navigation.navigate('Account')} style={{
          padding: 10,
        }}>
          <Icon type='ionicon' name='person' color={colors.white} size={20} />
        </TouchableOpacity>
      </View>
    </SafeAreaView >
  )
}

const styles = StyleSheet.create({
  tulisan: {
    fontSize: 14,
    marginBottom: 10,
    fontFamily: fonts.secondary[600],
    color: colors.black,
    textAlign: 'justify'
  },
  tulisanJudul: {
    fontSize: 16,
    marginBottom: 10,
    fontFamily: fonts.secondary[800],
    color: colors.black,
    textAlign: 'justify'
  }
})