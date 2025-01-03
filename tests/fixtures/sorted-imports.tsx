import {useQuery} from '@tanstack/react-query'
import {useState} from 'react'

import {getUser} from '../../api'
import type {User} from '../../types'
import {formatNumber, truncate} from '../../utils'
import Button from '../Button'
import styles from './styles.css'

export {useState, useQuery, getUser, styles, User, formatNumber, truncate, Button}
