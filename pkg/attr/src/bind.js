import { $ } from 'jsr:@ihasq/esptr@0.1.13';

export const bind = $((value, ref) => {
	ref.addEventListener('input', ({ target: { value: newValue } }) => $[value] = newValue);
	value.watch((newValue) => ref.value = newValue);
});
