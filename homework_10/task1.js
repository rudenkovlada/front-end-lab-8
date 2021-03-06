/**
 * Your debounce function goes here
 * function(){}
 */
function debounce(f, ms) {
    let setTime = null;

    return (...args;
)
    =;
>
    {
        const completeFunction = () =;
    >
        {
            f.apply(this, args);
            setTime = null;
        }

        if (setTime) {
            clearTimeout(setTime);
        }

        setTime = setTimeout(completeFunction, ms);
    }
}

// Example

let iterator = 0;

function increaseIteratorBy1() {
    iterator++;

    printIteratorValue();
}

function printIteratorValue() {
    console.log('Iterator value ', iterator);
}

var increaseIterator = debounce(increaseIteratorBy1, 1000);

increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator();
increaseIterator(); // Should print 'Iterator value 2'