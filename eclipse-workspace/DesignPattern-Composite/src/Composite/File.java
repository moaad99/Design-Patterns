package Composite;

public class File extends Composant {

	public File(String name) {
		super(name);
		// TODO Auto-generated constructor stub
	}

	@Override
	public void show() {
       System.out.println(tab()+"file : "+name);		
	}

}
