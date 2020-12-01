import { cTB, c, cM, createKey } from '../../../_utils/cssr'

export default c([
  ({ props }) => {
    const { size } = props.$vm
    const { $local } = props
    const fontSize = $local[createKey('fontSize', size)]
    const height = $local[createKey('height', size)]
    return cTB('input-group-label', [
      cM(size + '-size', {
        fontSize,
        lineHeight: height,
        height
      })
    ])
  }
])
