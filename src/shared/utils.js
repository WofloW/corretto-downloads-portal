import {map} from 'lodash'
export const listToOptions = (list) => {
    return map(list, value => {
        return {label: value, value}
    })
}