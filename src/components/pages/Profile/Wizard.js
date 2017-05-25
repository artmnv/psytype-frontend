import React from "react"
import RaisedButton from "material-ui/RaisedButton"
import FlatButton from "material-ui/FlatButton"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import { fetchProfile } from "../../../actions"
import { connect } from "react-redux"

class Wizard extends React.Component {
  state = {
    value: null,
  }

  handleChange = (event, index, value) => this.setState({ value })

  handleIKnow = () => {
    const { dispatch } = this.props
    dispatch(fetchProfile())
  }

  render() {
    return (
      <div style={{ width: "100%", maxWidth: 700, margin: "auto" }}>
        <p>
          Вы уже знаете свой психотип? Может у вас есть какие-то идеи? Пожалуйста, поделитесь вашими мыслями. Это никак не повлияет на результаты вашего типирования. Но это поможет нам в будущем типировать точнее!
        </p>
        <SelectField
          floatingLabelText="Мой психотип"
          value={this.state.value}
          onChange={this.handleChange}
          autoWidth={true}
        >
          <MenuItem value={null} primaryText="" />
          <MenuItem value={1} primaryText="Толстой (ВЭФЛ)" />
          <MenuItem value={2} primaryText="Сократ (ВЛЭФ)" />
          <MenuItem value={3} primaryText="Ахматова (ВЭЛФ)" />
          <MenuItem value={4} primaryText="Твардовский (ВФЭЛ)" />
          <MenuItem value={5} primaryText="Наполеон (ВФЛЭ)" />
          <MenuItem value={6} primaryText="Ленин (ВЛФЭ)" />
          <MenuItem value={7} primaryText="Аристипп (ФЛВЭ)" />
          <MenuItem value={8} primaryText="Чехов (ФВЭЛ)" />
          <MenuItem value={9} primaryText="Дюма (ФЭВЛ)" />
          <MenuItem value={10} primaryText="Эпикур (ФЛЭВ)" />
          <MenuItem value={11} primaryText="Борджа (ФЭЛВ)" />
          <MenuItem value={12} primaryText="Гёте (ФВЛЭ)" />
          <MenuItem value={13} primaryText="Бухарин (ЭФЛВ)" />
          <MenuItem value={14} primaryText="Андерсен (ЭЛВФ)" />
          <MenuItem value={15} primaryText="Газали (ЭВЛФ)" />
          <MenuItem value={16} primaryText="Пастернак (ЭВФЛ)" />
          <MenuItem value={17} primaryText="Руссо (ЭЛФВ)" />
          <MenuItem value={18} primaryText="Пушкин (ЭФВЛ)" />
          <MenuItem value={19} primaryText="Бертье (ЛФЭВ)" />
          <MenuItem value={20} primaryText="Паскаль (ЛЭВФ)" />
          <MenuItem value={21} primaryText="Платон (ЛФВЭ)" />
          <MenuItem value={22} primaryText="Эйнштейн (ЛВЭФ)" />
          <MenuItem value={23} primaryText="Августин (ЛЭФВ)" />
          <MenuItem value={24} primaryText="Лао-Цзы (ЛВФЭ)" />
        </SelectField>

        <br /><br /><br />
        <RaisedButton
          label="Я точно знаю"
          primary={true}
          onTouchTap={this.handleIKnow}
        />
        &nbsp;&nbsp;
        <RaisedButton label="Это просто теория" onTouchTap={this.authVK} />
        &nbsp;&nbsp;
        <FlatButton
          label="Я не знаю свой психотип"
          primary={true}
          onTouchTap={this.authVK}
        />
      </div>
    )
  }
}

export default connect()(Wizard)
