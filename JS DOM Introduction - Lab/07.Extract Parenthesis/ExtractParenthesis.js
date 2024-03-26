function extract(content) {

    contentElements = document.getElementById(content)

    const maches = contentElements.textContent.matchAll(/\(([a-zA-Z ]+)\)/g);
    // const maches = contentElements.textContent.matchAll(/\(([\.]+)\)/g)

    const text = Array.from(maches)
        .map(match => match[1])
        .join('; ')

    return text

}