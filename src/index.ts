import { h1 } from "@thi.ng/hiccup-html";
import { $compile } from "@thi.ng/rdom";

$compile(h1({}, "Hello world! 👋")).mount(document.body);
