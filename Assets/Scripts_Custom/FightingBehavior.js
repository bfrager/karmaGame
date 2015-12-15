#pragma strict

var anim: Animator;

//var jumpHash : int = Animation.StringToHash("Jump");
//var leftPunchHash : int = Animation.StringToHash("Attack.Box1_M3_Left_Jab");


function Start () {
	anim = GetComponent ("Animator");
}

function Update () {
	anim.SetBool("Blocking", false);
	if (Input.GetKeyDown("1")){
		anim.Play("Box1_M3_Left_Jab");
	}
	if (Input.GetKeyDown("2")){
		anim.Play("Box1_M3_Right_Cross");
	}
	if (Input.GetKey("3")){
		anim.SetBool("Blocking", true);
	}
}