export const crateDivNode = (props, child) => {

    const node = document.createElement('div');

    if (props.hasOwnProperty('class')) {
        if (typeof props.class === 'string') {
            node.classList.add(props.class);
        }

        if (Array.isArray(props.class)) {
            props.class.forEach(className => {
                node.classList.add(className);
            });
        }
    }

    if (child) {
        if (typeof child === "string") {
            node.innerText = child;
        } else  {
            node.appendChild(child);
        }
    }

    if (props.onClick) {
        node.addEventListener('click', props.onClick);
    }

    return node;
};
