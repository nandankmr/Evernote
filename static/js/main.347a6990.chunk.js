(this.webpackJsonpevernote=this.webpackJsonpevernote||[]).push([[0],{100:function(e,t,n){},210:function(e,t,n){},211:function(e,t,n){"use strict";n.r(t);var o=n(0),a=n.n(o),r=n(6),s=n.n(r),l=(n(100),n(13)),i=n(17),c=n.n(i),d=n(12),u=n(10),p=n(18),h=n(19),b=n(21),g=n(4),N=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100% - 35px)",position:"absolute",left:"0",width:"300px",boxShadow:"0px 0px 2px black"},newChatBtn:{borderRadius:"0px"},unreadMessage:{color:"red",position:"absolute",top:"0",right:"5px"},newNoteBtn:{width:"100%",height:"35px",borderBottom:"1px solid black",borderRadius:"0px",backgroundColor:"#29487d",color:"white","&:hover":{backgroundColor:"#88a2ce"}},sidebarContainer:{marginTop:"0px",width:"30vw",height:"100%",boxSizing:"border-box",float:"left",overflowY:"scroll",overflowX:"hidden"},newNoteInput:{width:"100%",margin:"0px",height:"35px",outline:"none",border:"none",paddingLeft:"5px","&:focus":{outline:"2px solid rgba(81, 203, 238, 1)"}},newNoteSubmitBtn:{width:"100%",backgroundColor:"#28787c",borderRadius:"0px",color:"white"}}},f=n(240),m=n(239),x=n(241),w=function(e){return{listItem:{cursor:"pointer"},textSection:{width:"90%"},deleteIcon:{position:"absolute",right:"5px",top:"calc(50% - 15px)","&:hover":{color:"red"}}}},v=n(243),y=n(86),S=n.n(y);var k=n(235),C=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).selectNote=function(e,t){n.props.selectNote(e,t)},n.deleteNote=function(e,t){window.confirm("Are you sure you want to delete ".concat(e.title,"?"))&&n.props.deleteNote(e,t)},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e,t=this,n=this.props,o=n._index,r=n._note,s=n.classes,l=n.selectedNoteIndex;return a.a.createElement("div",null,a.a.createElement(k.a,{className:s.listItem,selected:o===l,alignItems:"flex-start"},a.a.createElement("div",{className:s.textSection,onClick:function(){return t.selectNote(r,o)}},a.a.createElement(v.a,{primary:r.title,secondary:(e=r.body,e.replace(/<[^>]*>/g,"")).substring(0,30)+"..."})),a.a.createElement(S.a,{onClick:function(){return t.deleteNote(r,o)},className:s.deleteIcon})))}}]),t}(a.a.Component),E=Object(g.a)(w)(C),I=function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).selectNote=function(t,n){return e.props.selectNote(t,n)},e.deleteNote=function(t,n){return e.props.deleteNote(t,n)},e.newNote=function(){e.props.newNote(e.state.title),e.setState({addingNote:!e.state.addingNote,title:null})},e.updateTitle=function(t){e.setState({title:t})},e.newNoteBtnClick=function(){e.setState({addingNote:!e.state.addingNote,title:null}),console.log("btn clicked")},e.state={addingNote:!1,title:null},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props,n=t.notes,o=t.classes,r=t.selectedNoteIndex;return a.a.createElement("div",{className:o.sidebarContainer},a.a.createElement(m.a,{onClick:this.newNoteBtnClick,className:o.newNoteBtn},this.state.addingNote?"cancel":"New Note"),this.state.addingNote?a.a.createElement("div",null,a.a.createElement("input",{autoFocus:!0,type:"text",className:o.newNoteInput,placeholder:"Enter note title",onKeyUp:function(t){return e.updateTitle(t.target.value)}}),a.a.createElement(m.a,{className:o.newNoteSubmitBtn,onClick:this.newNote},"Submit Note")):null,a.a.createElement(f.a,null,n.map((function(t,n){return a.a.createElement("div",{key:n},a.a.createElement(E,{_note:t,_index:n,selectedNoteIndex:r,selectNote:e.selectNote,deleteNote:e.deleteNote}),a.a.createElement(x.a,null))}))))}}]),t}(a.a.Component),j=Object(g.a)(N)(I),O=n(87),B=n.n(O),T=function(e){return{root:{backgroundColor:e.palette.background.paper,height:"calc(100vh - 35px)",position:"absolute",left:"0",width:"600px",boxShadow:"0px 0px 2px black"},titleInput:{height:"50px",boxSizing:"border-box",border:"none",padding:"5px",fontSize:"24px",width:"calc(100% - 300px)",backgroundColor:"#29487d",color:"white",paddingLeft:"50px"},editIcon:{position:"absolute",left:"31vw",top:"12px",color:"white",width:"10",height:"10"},editorContainer:{height:"70vh",boxSizing:"border-box"}}},A=n(242),R=function(e){function t(){var e,n;Object(d.a)(this,t);for(var o=arguments.length,a=new Array(o),r=0;r<o;r++)a[r]=arguments[r];return(n=Object(p.a)(this,(e=Object(h.a)(t)).call.apply(e,[this].concat(a)))).titleStyle={marginTop:"1vh",width:"70vw"},n.updateTitle=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n.props.updateTitle(e);case 1:case"end":return t.stop()}}))},n.updateBody=function(e){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:n.props.updateBody(e);case 1:case"end":return t.stop()}}))},n}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){var e=this,t=this.props.classes;return a.a.createElement("div",{className:t.editorContainer},a.a.createElement(A.a,{variant:"outlined",label:"Title",style:this.titleStyle,value:this.props.selectedNote.title,onChange:function(t){return e.updateTitle(t.target.value)}}),a.a.createElement(B.a,{value:this.props.selectedNote.body,onChange:function(t){return e.updateBody(t)},placeholder:"Start Writing"}))}}]),t}(a.a.Component),z=Object(g.a)(T)(R),J=(n(210),function(e){function t(){var e;return Object(d.a)(this,t),(e=Object(p.a)(this,Object(h.a)(t).call(this))).componentDidMount=function(){var t=e.state.notes;console.log(t),t.length>0&&!e.state.selectedNote&&e.setState({selectedNote:t[0],selectedNoteIndex:0})},e.footerStyle={},e.headerStyle={backgroundColor:"#8395a7",color:"#182C61",margin:0,textAlign:"center",padding:"0.5rem",marginBottom:"0.5rem",borderBottom:"1px solid #341f97",transform:"scaleX(1.5)"},e.updateTitle=function(t){e.setState({notes:e.state.notes.map((function(n,o){return o===e.state.selectedNoteIndex&&(n.title=t),n}))})},e.deleteNote=function(t,n){return c.a.async((function(t){for(;;)switch(t.prev=t.next){case 0:if(n===e.state.selectedNoteIndex&&e.setState({selectedNoteIndex:null,selectedNote:null}),console.log(n,e.state.selectedNoteIndex),!(n<e.state.selectedNoteIndex)){t.next=5;break}return t.next=5,c.a.awrap(e.setState({selectedNoteIndex:e.state.selectedNoteIndex-1}));case 5:return t.next=7,c.a.awrap(e.setState({notes:e.state.notes.filter((function(e,t){return t!==n}))}));case 7:e.state.notes.length>0&&!e.state.selectedNote&&e.setState({selectedNote:e.state.notes[e.state.notes.length-1],selectedNoteIndex:e.state.notes.length-1});case 8:case"end":return t.stop()}}))},e.updateBody=function(t){e.setState({notes:e.state.notes.map((function(n,o){return o===e.state.selectedNoteIndex&&(n.body=t),n}))})},e.newNote=function(t){var n;return c.a.async((function(o){for(;;)switch(o.prev=o.next){case 0:return n={title:t,body:""},o.next=3,c.a.awrap(e.setState({notes:[].concat(Object(l.a)(e.state.notes),[n])}));case 3:e.selectNote(e.state.notes[e.state.notes.length-1],e.state.notes.length-1);case 4:case"end":return o.stop()}}))},e.selectNote=function(t,n){e.setState({selectedNote:t,selectedNoteIndex:n})},e.state={selectedNoteIndex:null,selectedNote:null,notes:[{title:"Welcome to Notebook",body:"<h1>Welcome to your personal Notebook!</h1><h2>Steps for creating a note:</h2><ol><li><strong>click 'New notes button' on the top left</strong></li><li><strong>Enter note title</strong></li><li><strong>click 'Submit Note'</strong></li><li><strong>Congrats! You have created your note...</strong></li></ol><br/><h2>Start writing in the text area on the right side.</h2><h2>To delete a note, click on the delete icon of the note.</h2>"},{title:"About",body:"<h1>About this App:</h><h2>\tThis is a web app that can be used to create notes.</h2><h2>\tEach note has a title and a body. Currently, new notes are stored in RAM because this app is not connected to a database to store the notes. </h2><p><br></p><h2><br></h2><h2>\tTechnologies used:</h2><ul><li><strong>HTML</strong></li><li><strong>CSS</strong></li><li><strong>React JS (A front end JavaScript framework)</strong></li><li><strong>Visual Studio Code (For coding)</strong></li><li><strong>Google Chrome (For testing)</strong></li></ul><br><br></p><h2>Suggested browser:- Google Chrome</h2><br><h3><strong><em><u>Disclaime</u>r:-  </em>This web app is not responsive. Use it on desktop only.</strong></h3>"},{title:"Contact",body:"<h1>Get in Touch:</h1><p><br></p><h2>\tEmail:Nandankmrjha@gmail.com</h2>"}]},e}return Object(b.a)(t,e),Object(u.a)(t,[{key:"render",value:function(){return a.a.createElement("div",{className:"app-container"},a.a.createElement("header",null,a.a.createElement("h1",{style:this.headerStyle},"Notebook!")),a.a.createElement(j,{selectedNoteIndex:this.state.selectedNoteIndex,notes:this.state.notes,selectNote:this.selectNote,newNote:this.newNote,deleteNote:this.deleteNote}),this.state.selectedNote?a.a.createElement(z,{selectedNote:this.state.selectedNote,selectedNoteIndex:this.state.selectedNoteIndex,updateBody:this.updateBody,updateTitle:this.updateTitle}):a.a.createElement("h1",{style:{textAlign:"center",margin:"0",color:"#333"}},"Create a New Note to see the Contents"))}}]),t}(a.a.Component));s.a.render(a.a.createElement(J,null),document.getElementById("evernote-container"))},95:function(e,t,n){e.exports=n(211)}},[[95,1,2]]]);
//# sourceMappingURL=main.347a6990.chunk.js.map