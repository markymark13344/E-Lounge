import React from 'react'
import { useAppContext } from '../../../Globals/appContext'

export const Alert = () => {
    const {alertType,alertText} = useAppContext()
    return <div className={`alert alert-${alertType}`}>{alertText}</div>
}

export default Alert
