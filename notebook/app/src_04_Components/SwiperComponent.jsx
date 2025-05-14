import React, { Component } from 'react';
import { StyleSheet, Text, ScrollView, Image, Dimensions} from 'react-native';
import Swiper from 'react-native-swiper'

const SwiperComponent = () =>{

    return(
        <ScrollView>
            <Swiper
                style={[styles.wrapper]}
                showsButtons={true}
                autoplay={true}
            >
                <Image
                    style={[styles.slideImage]}
                    source = {require('./images/swiper1.jpg')}
                />
                <Image
                    style={[styles.slideImage]}
                    source = {require('./images/swiper2.jpg')}
                />
                <Image
                    style={[styles.slideImage]}
                    source = {require('./images/swiper3.jpg')}
                />
            </Swiper>
        </ScrollView>
        )
    }

    const styles = StyleSheet.create({
        wrapper:{
            height:200
        },
        slideImage:{
            height:200,
            width:Dimensions.get('window').width
            }
        })

export default SwiperComponent;