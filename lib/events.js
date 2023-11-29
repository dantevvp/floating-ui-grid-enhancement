function subscribe(element, eventName, listener) {
  element.addEventListener(eventName, listener);
}

function unsubscribe(element, eventName, listener) {
  element.removeEventListener(eventName, listener);
}

function publish(element, eventName, data) {
  console.log(`publishing ${eventName}`)
  const event = new CustomEvent(eventName, { detail: data });
  element.dispatchEvent(event);
}
  
export { publish, subscribe, unsubscribe };