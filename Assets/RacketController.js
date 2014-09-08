#pragma strict

function Start () {

}

function Update () {
	//ResetRotation();
	//Debug.Log( transform.eulerAngles.y);
	if(Input.GetKey(KeyCode.LeftArrow)){
		animation.Play("Racket Moviment Left");
	}

}

function ResetRotation(){
	while( transform.eulerAngles.y > 0){
		transform.eulerAngles.y += -20;
	}
	yield;
}

function MoveRotation(){
	while( transform.eulerAngles.y < 53){
		transform.eulerAngles.y += 20;
	}
	yield;
}