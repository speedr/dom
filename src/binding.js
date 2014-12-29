export class Binding {
  constructor(el, type, fn, capture = false) {
    this.el = el
    this.type = type
    this.fn = fn
    this.capture = capture
    this.bound = false
  }

  bind() {
    if (!this.bound) {
      this.bound = true
      this.el.addEventListener(this.type, this.fn, this.capture)
    }
  }

  unbind() {
    if (this.bound) {
      this.bound = false
      this.el.removeEventListener(this.type, this.fn, this.capture)
    }
  }
}

export function bind(source, type, fn, capture = false) {
  let binding = new Binding(source, type, fn, capture)
  binding.bind()
  return binding
}
