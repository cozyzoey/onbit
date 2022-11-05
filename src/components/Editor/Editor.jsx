import React, { Component } from 'react'
import ReactQuill from 'react-quill'
import BasicBtn from '../BasicBtn'
import Alert from '../Alert'
import history from '../../utils/history'
import 'react-quill/dist/quill.snow.css'
import './Editor.scss'

export class Editor extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: '',
      contents: '',
      fixed: false,
      error: '',
    }
    this.onInputChange = this.onInputChange.bind(this)
  }

  componentDidMount() {
    // === Remove tabindex from quill toolbar
    const quillToolbar = document.querySelectorAll(
      '.ql-picker-label, .ql-formats button'
    )
    quillToolbar.forEach((menu) => menu.setAttribute('tabindex', '-1'))

    // === Autofocus to editor
    document.querySelector('.ql-editor').focus()

    // === Set initial state
    if (this.props.initials) {
      const { title, contents, fixed } = this.props.initials
      this.setState({ title, contents, fixed })
    }

    window.scrollTo(0, 0)
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.error !== this.state.error && this.state.error) {
      this.timer = setTimeout(() => this.setState({ error: '' }), 3000)
    }
  }

  componentWillUnmount() {
    clearTimeout(this.timer)
  }

  modules = {
    toolbar: [
      [{ header: [false, 3, 2, 1] }],
      ['image', 'video', 'link'],
      [
        { color: [] },
        { background: [] },
        'bold',
        'italic',
        'underline',
        'blockquote',
      ],
    ],
  }

  onInputChange = (e) => {
    this.setState({ [e.target.name]: e.target.value })
  }

  onFormSubmit = () => {
    const { title, contents, fixed } = this.state

    if (!title) return this.setState({ error: '제목을 입력해주세요' })

    if (!contents) return this.setState({ error: '내용을 입력해주세요' })

    this.props.onFormSubmit(title, contents, fixed)
  }

  render() {
    return (
      <div className='editor'>
        <input
          name='title'
          value={this.state.title}
          onChange={this.onInputChange}
          required
          placeholder='제목을 입력하세요'
          autoComplete='off'
        />
        <hr className='editor__hr'></hr>
        <ReactQuill
          name='contents'
          value={this.state.contents}
          onChange={(value) => this.setState({ contents: value })}
          theme='snow'
          modules={this.modules}
        />
        <hr className='editor__hr'></hr>

        <div className='editor__actions'>
          <label>
            <input
              type='checkbox'
              checked={this.state.fixed}
              onChange={(e) => this.setState({ fixed: e.target.checked })}
            ></input>
            상단에 고정
          </label>
          <div className='editor__actions__btns'>
            <BasicBtn
              variant='trans'
              onClick={() => history.push('/notices/page/1')}
            >
              취소
            </BasicBtn>
            <BasicBtn variant='secondary' onClick={this.onFormSubmit}>
              완료
            </BasicBtn>
          </div>
        </div>
        {this.state.error && <Alert variant='error'>{this.state.error}</Alert>}
      </div>
    )
  }
}

export default Editor
