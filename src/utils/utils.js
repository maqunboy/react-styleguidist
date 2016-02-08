export function setComponentsNames(components) {
	components.map((component) => {
		let { module } = component;
		component.name = module.default ? (module.default.displayName || module.default.name) : (module.displayName || module.name);
		if (!component.name) {
			throw Error(`Cannot detect component name for ${component.filepath}`);
		}
	});
	return components;
}

export function globalizeComponents(components) {
	components.map((component) => {
		global[component.name] = component.module.default || component.module;
	});
}
