/*
 *  /MathJax/extensions/CHTML-preview.js
 *
 *  Copyright (c) 2009-2013 The MathJax Consortium
 *
 *  Licensed under the Apache License, Version 2.0 (the "License");
 *  you may not use this file except in compliance with the License.
 *  You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 *  Unless required by applicable law or agreed to in writing, software
 *  distributed under the License is distributed on an "AS IS" BASIS,
 *  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 *  See the License for the specific language governing permissions and
 *  limitations under the License.
 */

(function(a,d){var b=a.config.menuSettings;var c=MathJax.Extension["CHTML-preview"]={version:"1.0",config:a.CombineConfig("CHTML-preview",{Chunks:{EqnChunk:10000,EqnChunkFactor:1,EqnChunkDelay:0},color:"inherit!important",updateTime:10,updateDelay:10,messageStyle:"none",disabled:false}),Config:function(){a.Config({"HTML-CSS":this.config.Chunks,SVG:this.config.Chunks,});MathJax.Ajax.Styles({".MathJax_Preview":{color:this.config.color}});var j,g,h,e,i;var f=this.config;a.Register.MessageHook("Begin Math Output",function(){if(!e&&!f.disabled&&b.CHTMLpreview&&b.renderer!=="CommonHTML"){j=a.processUpdateTime;g=a.processUpdateDelay;h=a.config.messageStyle;a.processUpdateTime=f.updateTime;a.processUpdateDelay=f.updateDelay;a.Config({messageStyle:f.messageStyle});MathJax.Message.Clear(0,0);i=true}});a.Register.MessageHook("End Math Output",function(){if(!e&&i){a.processUpdateTime=j;a.processUpdateDelay=g;a.Config({messageStyle:h});e=true}})},Preview:function(e){if(this.config.disabled||!b.CHTMLpreview||b.renderer==="CommonHTML"){return}var f=e.script.previousSibling;if(!f||f.className!==MathJax.Hub.config.preRemoveClass){f=d.Element("span",{className:MathJax.Hub.config.preRemoveClass});e.script.parentNode.insertBefore(f,e.script)}f.innerHTML="";return this.postFilter(f,e)},postFilter:function(h,g){try{g.math.root.toCommonHTML(h)}catch(f){if(!g.math.root.toCommonHTML){var e=MathJax.Callback.Queue();a.RestartAfter(e.Push(["Require",MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/config.js"],["Require",MathJax.Ajax,"[MathJax]/jax/output/CommonHTML/jax.js"]))}if(!f.restart){throw f}return MathJax.Callback.After(["postFilter",this,h,g],f.restart)}},Register:function(e){a.Register.StartupHook(e+" Jax Require",function(){var f=MathJax.InputJax[e];f.postfilterHooks.Add(["Preview",MathJax.Extension["CHTML-preview"]],50)})}};c.Register("TeX");c.Register("MathML");c.Register("AsciiMath");a.Register.StartupHook("End Config",["Config",c])})(MathJax.Hub,MathJax.HTML);MathJax.Ajax.loadComplete("[MathJax]/extensions/CHTML-preview.js");
