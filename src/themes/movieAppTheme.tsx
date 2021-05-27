import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  posterContainer: {
    width: 300,
    height: 470,
  },
  imageContainer: {
    flex: 1,
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 8,
    borderRadius: 18,
  },
  image: {
    flex: 1,
    borderRadius: 18,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    marginLeft: 5,
  },
  subTitle: {
    fontSize: 16,
    opacity: 0.8,
  },
});
