import React from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Items from "./components/Items"
import Categories from "./components/Categories"
import ShowFullItem from "./components/ShowFullItem"

class App extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      orders: [],
      currentItems: [],
      items: [
        {
          id: 1,
          title: 'Bieżnia',
          img: 'item_1_bieznia_1.jpg',
          desc: 'Wysoce zaawansowana bieżnia z funkcjami interaktywnymi',
          category: 'biezni',
          price: '3500.00'
        },
        {
          id: 2,
          title: 'Hantle',
          img: 'item_2_hantle.jpg',
          desc: 'Ergonomiczne hantle o doskonałej funkcjonalności i wytrzymałej konstrukcji',
          category: 'hantle',
          price: '200.00'
        },
        {
          id: 3,
          title: 'Sztanga ezo podobna',
          img: 'item_3_sztanga-ezo-podobna.jpg',
          desc: 'Niezawodna sztanga o precyzyjnym wykonaniu i wyjątkowym komforcie treningu',
          category: 'sztangi',
          price: '300.00'
        },
        {
          id: 4,
          title: 'Ławka do ćwiczeń',
          img: 'item_4_lawka-do-cwiczen.jpg',
          desc: 'Zaawansowana ławka do ćwiczeń, łącząca funkcjonalność z wygodą i solidną konstrukcją',
          category: 'lawki',
          price: '500.00'
        },
        {
          id: 5,
          title: 'Hyper ławka',
          img: 'item_5_hyper-lawka.jpg',
          desc: 'Innowacyjna Hyper ławka zapewniająca intensywny trening i wszechstronne wzmacnianie mięśni.',
          category: 'lawki',
          price: '800.00'
        },
        {
          id: 6,
          title: 'Ławka spadkowa',
          img: 'item_6_lawka-spadkowa.jpg',
          desc: 'Ławka spadkowa o doskonałej ergonomii i niezrównanej stabilności, idealna do intensywnego treningu siłowego',
          category: 'lawki',
          price: '600.00'
        },
        {
          id: 7,
          title: 'Bialko Whey - 2270g',
          img: 'item_7_bialko-whey-gold-standart-2270g.jpg',
          desc: 'Bialko Whey Gold Standart - 2270g',
          category: 'jedzenie',
          price: '300.00'
        }
      ],
      showFullItem: false,
      fullItem: {}
    }
    this.state.currentItems = this.state.items
    this.addToOrder = this.addToOrder.bind(this)
    this.deleteOrder = this.deleteOrder.bind(this)
    this.chooseCategory = this.chooseCategory.bind(this)
    this.onShowItem = this.onShowItem.bind(this)
  }
  render() {
    return (
      <div className="wrapper">
        <Header orders={this.state.orders} onDelete={this.deleteOrder} />
        <Categories chooseCategory={this.chooseCategory} />
        <Items onShowItem={this.onShowItem} items={this.state.currentItems} onAdd={this.addToOrder} />

        {this.state.showFullItem && <ShowFullItem onAdd={this.addToOrder} onShowItem={this.onShowItem} item={this.state.fullItem} />}
        <Footer />
      </div>
    );
  }

  onShowItem(item) {
    this.setState({fullItem: item})
    this.setState({showFullItem: !this.state.showFullItem})
  }

  chooseCategory(category) {
    if(category === 'all') {
      this.setState({currentItems: this.state.items})
      return
    }
    this.setState({
      currentItems: this.state.items.filter(el => el.category === category)
    })
  }


  deleteOrder(id) {
    this.setState({orders: this.state.orders.filter(el => el.id !== id)})
  }

  addToOrder(item) {
    let isInArry = false
    this.state.orders.forEach(el => {
      if (el.id === item.id)
        isInArry = true
    })
    if (!isInArry)
      this.setState({orders: [...this.state.orders, item] })
  }
}

export default App;