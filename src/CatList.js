const CatList = (props) => {
  let pics = props.catList.map((catPic, index) => <img src={catPic.url} />)

  render() {
    return pics
  }
}
