//header
#include <stdio.h>
#include<GL/gl.h>
#include<GL/glut.h>
#include <emscripten.h>

//globals
#define WASM_EXPORT __attribute__((visibility("default")))

GLuint elephant;
float elephantrot;
char ch='1';

//other functions and main

//.obj loader code begins
WASM_EXPORT
void loadObj(char *fname)
{
	printf("loading OBJ File");
	FILE *fp;
	int read;
	GLfloat x, y, z;
	char ch;
	elephant=glGenLists(1);
	fp=fopen(fname,"r");
	if (!fp) 
		{
			printf("can't open file %s\n", fname);
		exit(1);
		}
	glPointSize(2.0);
	glNewList(elephant, GL_COMPILE);
	{
	glPushMatrix();
	glBegin(GL_POINTS);
	while(!(feof(fp)))
	{
	read=fscanf(fp,"%c %f %f %f",&ch,&x,&y,&z);
	if(read==4&&ch=='v')
	{
	glVertex3f(x,y,z);
	}
	}
	glEnd();
	}
	glPopMatrix();
	glEndList();
	fclose(fp);
}

//.obj loader code ends here
WASM_EXPORT
void reshape(int w,int h)
{    
	glViewport(0,0,w,h);
	glMatrixMode(GL_PROJECTION);
	glLoadIdentity();
        gluPerspective (60, (GLfloat)w / (GLfloat)h, 0.1, 1000.0);
	//glOrtho(-25,25,-2,2,0.1,100);	
	glMatrixMode(GL_MODELVIEW);
}

WASM_EXPORT
void drawCar()
{
 	glPushMatrix();
 	glTranslatef(0,-40.00,-105);
 	glColor3f(1.0,0.23,0.27);
 	glScalef(0.1,0.1,0.1);
 	glRotatef(elephantrot,0,1,0);
 	glCallList(elephant);
 	glPopMatrix();
 	elephantrot=elephantrot+0.6;
 	if(elephantrot>360)elephantrot=elephantrot-360;
}

WASM_EXPORT
void display(void)
{  
   	glClearColor (0.0,0.0,0.0,1.0); 
   	glClear (GL_COLOR_BUFFER_BIT | GL_DEPTH_BUFFER_BIT);
   	glLoadIdentity();
   	drawCar();
   	glutSwapBuffers(); //swap the buffers

}

WASM_EXPORT
int main(int argc,char **argv)
{
	printf("RUNNING OPEN GL >>>");
	glutInit(&argc,argv);
	glutInitDisplayMode(GLUT_DOUBLE|GLUT_RGB|GLUT_DEPTH);
	glutInitWindowSize(800,450);
	glutInitWindowPosition(20,20);
	glutCreateWindow("ObjLoader");
	glutReshapeFunc(reshape);
    glutDisplayFunc(display);
	glutIdleFunc(display);
    loadObj((char*)"cube.obj");//replace porsche.obj with radar.obj or any other .obj to display it
	glutMainLoop();
	return 0;
}