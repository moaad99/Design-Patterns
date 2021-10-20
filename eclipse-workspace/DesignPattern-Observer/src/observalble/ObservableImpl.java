package observalble;

import java.util.ArrayList;
import java.util.List;

import observers.Observer;

public class ObservableImpl implements Observable {
	
	private int etat;
	
	private List<Observer> observers = new ArrayList<>();


	

	@Override
	public void subscribe(Observer observer) {
		      observers.add(observer);
	}

	@Override
	public void unsubscribe(Observer observer) {
	      observers.remove(observer);
		
	}

	public int getEtat() {
		return etat;
	}

	public void setEtat(int etat) {
		this.etat = etat;
		this.notifyObservers();
	}

	@Override
	public void notifyObservers() {
		for(Observer obs: observers) {
			obs.update(etat);
		}
		
	}
	
	

}
