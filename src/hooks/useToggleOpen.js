import { useCallback, useState } from 'react'

function useToggleOpen() {
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = useCallback(event => {
    setAnchorEl(event.currentTarget)
  }, [])

  const handleClose = useCallback(() => {
    setAnchorEl(null)
  }, [])

  return [anchorEl, handleClick, handleClose, setAnchorEl]
}

export const Toggle = ({ children }) => {
  const [anchorEl, handleClick, handleClose] = useToggleOpen(null)
  const open = Boolean(anchorEl)
  return children({ open, handleClick, handleClose, anchorEl })
}

export default useToggleOpen
