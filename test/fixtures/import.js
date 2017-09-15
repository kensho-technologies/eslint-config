// bar is not exported
import x, {foo, bar} from './exports'
// file does not exist
import baz from './nonexistent'

export {foo, bar, baz, x}
