﻿#pragma strict

var TheDamage : int = 50;

var Distance : float;

function Update () 
{
	if (Input.GetButtonDown("Fire1"))
	{
		var hit : RaycastHit;
		if (Physics.Raycast (transform.position, transform.TransformDirection(Vector3.forward), hit))
		{
			Distance = hit.distance;
			hit.transform.SendMessage("ApplyDamage", TheDamage, SendMessageOptions.DontRequireReceiver);
		}
	}
}