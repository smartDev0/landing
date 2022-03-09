import styled, { css } from 'styled-components'
import MuiIconButton from '@material-ui/core/IconButton'

const IconButton = styled(MuiIconButton)`
  ${props =>
    css`
      cursor: pointer;
      transition: all 0.2s ${props.theme.transitions.easing.easeInOut};
      color: white;
      padding: 5px 8px;
    `}
`

export default IconButton
