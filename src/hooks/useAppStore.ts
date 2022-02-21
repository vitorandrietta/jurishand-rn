import storeContext from '~/context';
import { AppStore } from '~/store/AppStore';
import useStore from '~/hooks/useStore';

const useAppStore = (): AppStore => useStore(storeContext);

export default useAppStore;
