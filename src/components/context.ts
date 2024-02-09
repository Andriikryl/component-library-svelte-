import { writable } from 'svelte/store'
import { setContext, getContext } from 'svelte'
import type {
	AccordionOptions,
	ActiveId,
	ActiveIdContext,
	CollapseContext
} from './types'

export function setAccordionOptions({collapse}: AccordionOptions){
    const activeComponentId = writable(null);
    setContext('collapse', collapse)
	setContext('active', activeComponentId)
}

export function getAccordionOptions() {
	const collapse = getContext('collapse')
	const activeComponentId = getContext('active')
	return { collapse, activeComponentId }
}