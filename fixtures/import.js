import x, {foo, bar} from './exports' // bar is not exported
import baz from './nonexistent' // file does not exist

export {foo, bar, baz, x}
