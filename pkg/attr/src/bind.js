import { $ } from './ptr.js';

export const bind = $((value, ref) => {
	ref.addEventListener('input', ({ target: { value: newValue } }) => $[value] = newValue);
	value.watch((newValue) => ref.value = newValue);
});
