import { createAppContainer } from 'react-navigation'
import { createStackNavigator } from 'react-navigation-stack'
import HomeScreen from './src/screens/HomeScreen'
import ComponentsScreen from './src/screens/ComponentsScreen'
import ListScreen from './src/screens/ListScreen'
import ImageScreen from './src/screens/ImageScreen'
import Counter from './src/screens/CounterScreen'
import Color from './src/screens/ColorScreen'
import Square from './src/screens/SquareScreen'
import Text from './src/screens/TextScreen'

const navigator = createStackNavigator (
  {
    Home: HomeScreen,
    Components: ComponentsScreen,
    List: ListScreen,
    ImageScreen: ImageScreen,
    Counter: Counter,
    Color: Color,
    Square: Square,
    Text: Text
  },
  {
    initialRouteName: 'Home',
    defaultNavigatonOptions: {
      title: 'App!'
    }
  }
)

export default createAppContainer(navigator)