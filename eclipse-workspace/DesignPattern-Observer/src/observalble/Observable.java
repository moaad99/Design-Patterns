package observalble;

import observers.Observer;

public interface Observable {
	
	void subscribe(Observer observer);
	void unsubscribe(Observer observer);
	void notifyObservers();



}
