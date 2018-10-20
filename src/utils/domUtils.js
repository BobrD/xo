export const h = (tagName, props, child) => {

    const node = document.createElement(tagName);

    if (props.hasOwnProperty('class')) {
        if (typeof props.class === 'string') {
            node.classList.add(props.class);
        }

        if (Array.isArray(props.class)) {
            node.classList.add(...props.class);
        }
    }

    if (child) {
        if (typeof child === "string") {
            node.innerText = child;
        } else if (Array.isArray(child))  {
            child.forEach(child => {
                node.appendChild(child);
            });
        } else if (child) {
            node.appendChild(child);
        }
    }

    if (props.onClick) {
        node.addEventListener('click', props.onClick);
    }

    return node;
};
