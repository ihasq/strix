const createPropertyFn = callbackFn => ({
	enumerable: false,
	value: callbackFn
});

const PUBLISHED_PTR = [];

const $ = new Proxy((value, refreshCallback = value => value) => {

	let hasDisposed = false;

	const
		BASE_SYMBOL = Symbol(performance.now()),
		BASE_WATCHER_POOL = [],
		BASE_PROPERTY = {
			enumerable: false,
			get() {
				return value;
			},
			set(newValue) {
				BASE_WATCHER_POOL.forEach(x => x(newValue));
				return value = refreshCallback(newValue);
			},
		},
		BASE_POINTER = Object.defineProperties({}, {
			toString: createPropertyFn(() => hasDisposed
				? undefined
				: BASE_SYMBOL
			),
			watch: createPropertyFn((callbackFn) => {
				if(callbackFn) {
					BASE_WATCHER_POOL.push(callbackFn);
				}
			}),
			[Symbol.dispose]: createPropertyFn(() => hasDisposed = true),
			to: createPropertyFn((destination, transition, options = { infinite: true }) => {
				let baseMS = performance.now();
				const refreshFn = () => {
					const delta = performance.now() - baseMS;
					requestAnimationFrame(refreshFn);

				}
				requestAnimationFrame(refreshFn);
			})
		})
	;

	Object.defineProperty(window, BASE_SYMBOL, BASE_PROPERTY);

	PUBLISHED_PTR.push(BASE_POINTER);

	return BASE_POINTER;

}, {
	get(t, prop) {
		switch(typeof prop) {
			case "symbol": {
				return window[prop]
			}
			case "string": switch(prop) {
				case "isPointer": {
					return function(pointer) {
						return PUBLISHED_PTR.includes(pointer)
					}
				}
			}
		}
	},
	set(t, prop, newValue) {
		switch(typeof prop) {
			case "symbol": {
				window[prop] = newValue;
				
			}
		}
		return true;
	}
});

export { $ }