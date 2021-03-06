import { MiscModule } from "./misc/misc.module";
import { MiscComponent } from "./misc/misc.component";
import { FormLayoutComponent } from "./form-layout/form-layout.component";
import { RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";
import { HomeComponent } from "./components/home/home.component";
import { InvalidStateComponent } from "./invalid-state/invalid-state.component";
import { DisplayComponent } from "./components/display/display.component";
import { ElenvationComponent } from "./components/elenvation/elenvation.component";
import { FlexboxComponent } from "./components/flexbox/flexbox.component";
import { TextComponent } from "./components/text/text.component";
import { WidgetsComponent } from "./components/widgets/widgets.component";
import { FlexGridDemo } from "./components/flexgrid/flexgriddemo";
import { SpacingComponent } from "./components/spacing/spacing.component";
import { TypographyComponent } from "./components/typography/typography.component";
import { CrudComponent } from "./components/crud/crud.component";
import { TimelineComponent } from "./components/timeline/timeline.component";
import { LoginComponent } from "./components/login/login.component";
import { ErrorComponent } from "./components/error/error.component";
import { NotFoundComponent } from "./components/not-found/not-found.component";
import { DocumentsComponent } from "./components/documents/documents.component";

@NgModule({
    imports: [
        RouterModule.forRoot(
            [
                { path: "", component: HomeComponent },
                { path: "form-layout", component: FormLayoutComponent },
                { path: "invalid-state", component: InvalidStateComponent },
                { path: "display", component: DisplayComponent },
                { path: "elenvation", component: ElenvationComponent },
                { path: "flexbox", component: FlexboxComponent },
                { path: "text", component: TextComponent },
                { path: "spacing", component: SpacingComponent },
                { path: "typography", component: TypographyComponent },
                { path: "crud", component: CrudComponent },
                { path: "timeline", component: TimelineComponent },
                { path: "login", component: LoginComponent },
                { path: "error", component: ErrorComponent },
                { path: "404", component: NotFoundComponent },
                { path: "documents", component: DocumentsComponent },

                { path: "widgets", component: WidgetsComponent },
                {
                    path: "input-layout",
                    loadChildren: () =>
                        import("./input-layout/input-layout.module").then(
                            (m) => m.InputLayoutModule
                        ),
                },
                {
                    path: "grid",
                    loadChildren: () =>
                        import(
                            "../showcase/components/flexgrid/flexgriddemo.module"
                        ).then((m) => m.FlexGridDemoModule),
                },
                {
                    path: "float-label",
                    loadChildren: () =>
                        import("./float-label/float-label.module").then(
                            (m) => m.FloatLabelModule
                        ),
                },
                {
                    path: "list",
                    loadChildren: () =>
                        import("./list/list.module").then((m) => m.ListModule),
                },
                {
                    path: "media",
                    loadChildren: () =>
                        import("./media/media.module").then(
                            (m) => m.MediaModule
                        ),
                },
                {
                    path: "menu",
                    loadChildren: () =>
                        import("./menu/menu.module").then((m) => m.MenuModule),
                },
                {
                    path: "setup",
                    loadChildren: () =>
                        import("./components/setup/setup.module").then(
                            (m) => m.SetupModule
                        ),
                },
                {
                    path: "theming",
                    loadChildren: () =>
                        import("./components/theming/theming.module").then(
                            (m) => m.ThemingModule
                        ),
                },
                {
                    path: "icons",
                    loadChildren: () =>
                        import("./components/icons/icons.module").then(
                            (m) => m.IconsModule
                        ),
                },
                {
                    path: "accordion",
                    loadChildren: () =>
                        import(
                            "./components/accordion/accordiondemo.module"
                        ).then((m) => m.AccordionDemoModule),
                },
                {
                    path: "autocomplete",
                    loadChildren: () =>
                        import(
                            "./components/autocomplete/autocompletedemo.module"
                        ).then((m) => m.AutoCompleteDemoModule),
                },
                {
                    path: "blockui",
                    loadChildren: () =>
                        import("./components/blockui/blockuidemo.module").then(
                            (m) => m.BlockUIDemoModule
                        ),
                },
                {
                    path: "breadcrumb",
                    loadChildren: () =>
                        import(
                            "./components/breadcrumb/breadcrumbdemo.module"
                        ).then((m) => m.BreadcrumbDemoModule),
                },
                {
                    path: "button",
                    loadChildren: () =>
                        import("./components/button/buttondemo.module").then(
                            (m) => m.ButtonDemoModule
                        ),
                },
                {
                    path: "calendar",
                    loadChildren: () =>
                        import(
                            "./components/calendar/calendardemo.module"
                        ).then((m) => m.CalendarDemoModule),
                },
                {
                    path: "captcha",
                    loadChildren: () =>
                        import("./components/captcha/captchademo.module").then(
                            (m) => m.CaptchaDemoModule
                        ),
                },
                {
                    path: "card",
                    loadChildren: () =>
                        import("./components/card/carddemo.module").then(
                            (m) => m.CardDemoModule
                        ),
                },

                {
                    path: "chart",
                    loadChildren: () =>
                        import("./components/chart/chartdemo.module").then(
                            (m) => m.ChartDemoModule
                        ),
                },
                {
                    path: "checkbox",
                    loadChildren: () =>
                        import(
                            "./components/checkbox/checkboxdemo.module"
                        ).then((m) => m.CheckboxDemoModule),
                },
                {
                    path: "chips",
                    loadChildren: () =>
                        import("./components/chips/chipsdemo.module").then(
                            (m) => m.ChipsDemoModule
                        ),
                },
                {
                    path: "codehighlighter",
                    loadChildren: () =>
                        import(
                            "./components/codehighlighter/codehighlighterdemo.module"
                        ).then((m) => m.CodeHighlighterDemoModule),
                },
                {
                    path: "colorpicker",
                    loadChildren: () =>
                        import(
                            "./components/colorpicker/colorpickerdemo.module"
                        ).then((m) => m.ColorPickerDemoModule),
                },
                {
                    path: "confirmdialog",
                    loadChildren: () =>
                        import(
                            "./components/confirmdialog/confirmdialogdemo.module"
                        ).then((m) => m.ConfirmDialogDemoModule),
                },
                {
                    path: "contextmenu",
                    loadChildren: () =>
                        import(
                            "./components/contextmenu/contextmenudemo.module"
                        ).then((m) => m.ContextMenuDemoModule),
                },

                {
                    path: "defer",
                    loadChildren: () =>
                        import("./components/defer/deferdemo.module").then(
                            (m) => m.DeferDemoModule
                        ),
                },
                {
                    path: "dialog",
                    loadChildren: () =>
                        import("./components/dialog/dialogdemo.module").then(
                            (m) => m.DialogDemoModule
                        ),
                },
                {
                    path: "dynamicdialog",
                    loadChildren: () =>
                        import(
                            "./components/dynamicdialog/dynamicdialogdemo.module"
                        ).then((m) => m.DynamicDialogDemoModule),
                },
                {
                    path: "dragdrop",
                    loadChildren: () =>
                        import(
                            "./components/dragdrop/dragdropdemo.module"
                        ).then((m) => m.DragDropDemoModule),
                },
                {
                    path: "dropdown",
                    loadChildren: () =>
                        import(
                            "./components/dropdown/dropdowndemo.module"
                        ).then((m) => m.DropdownDemoModule),
                },
                {
                    path: "editor",
                    loadChildren: () =>
                        import("./components/editor/editordemo.module").then(
                            (m) => m.EditorDemoModule
                        ),
                },
                {
                    path: "fieldset",
                    loadChildren: () =>
                        import(
                            "./components/fieldset/fieldsetdemo.module"
                        ).then((m) => m.FieldsetDemoModule),
                },
                {
                    path: "fileupload",
                    loadChildren: () =>
                        import(
                            "./components/fileupload/fileuploaddemo.module"
                        ).then((m) => m.FileUploadDemoModule),
                },
                {
                    path: "filterutils",
                    loadChildren: () =>
                        import(
                            "./components/filterutils/filterutilsdemo.module"
                        ).then((m) => m.FilterUtilsDemoModule),
                },
                {
                    path: "flexgrid",
                    loadChildren: () =>
                        import(
                            "./components/flexgrid/flexgriddemo.module"
                        ).then((m) => m.FlexGridDemoModule),
                },
                {
                    path: "focustrap",
                    loadChildren: () =>
                        import(
                            "./components/focustrap/focustrapdemo.module"
                        ).then((m) => m.FocusTrapDemoModule),
                },
                {
                    path: "formlayout",
                    loadChildren: () =>
                        import(
                            "./components/formlayout/formlayoutdemo.module"
                        ).then((m) => m.FormLayoutDemoModule),
                },
                {
                    path: "fullcalendar",
                    loadChildren: () =>
                        import(
                            "./components/fullcalendar/fullcalendardemo.module"
                        ).then((m) => m.FullCalendarDemoModule),
                },
                {
                    path: "galleria",
                    loadChildren: () =>
                        import(
                            "./components/galleria/galleriademo.module"
                        ).then((m) => m.GalleriaDemoModule),
                },
                {
                    path: "gmap",
                    loadChildren: () =>
                        import("./components/gmap/gmapdemo.module").then(
                            (m) => m.GMapDemoModule
                        ),
                },
                {
                    path: "inplace",
                    loadChildren: () =>
                        import("./components/inplace/inplacedemo.module").then(
                            (m) => m.InplaceDemoModule
                        ),
                },
                {
                    path: "inputmask",
                    loadChildren: () =>
                        import(
                            "./components/inputmask/inputmaskdemo.module"
                        ).then((m) => m.InputMaskDemoModule),
                },
                {
                    path: "inputnumber",
                    loadChildren: () =>
                        import(
                            "./components/inputnumber/inputnumberdemo.module"
                        ).then((m) => m.InputNumberDemoModule),
                },
                {
                    path: "inputswitch",
                    loadChildren: () =>
                        import(
                            "./components/inputswitch/inputswitchdemo.module"
                        ).then((m) => m.InputSwitchDemoModule),
                },

                {
                    path: "inputgroup",
                    loadChildren: () =>
                        import(
                            "./components/inputgroup/inputgroupdemo.module"
                        ).then((m) => m.InputGroupDemoModule),
                },
                {
                    path: "inputtextarea",
                    loadChildren: () =>
                        import(
                            "./components/inputtextarea/inputtextareademo.module"
                        ).then((m) => m.InputTextareaDemoModule),
                },
                {
                    path: "keyfilter",
                    loadChildren: () =>
                        import(
                            "./components/keyfilter/keyfilterdemo.module"
                        ).then((m) => m.KeyFilterDemoModule),
                },
                {
                    path: "lightbox",
                    loadChildren: () =>
                        import(
                            "./components/lightbox/lightboxdemo.module"
                        ).then((m) => m.LightboxDemoModule),
                },
                {
                    path: "listbox",
                    loadChildren: () =>
                        import("./components/listbox/listboxdemo.module").then(
                            (m) => m.ListboxDemoModule
                        ),
                },
                {
                    path: "lts",
                    loadChildren: () =>
                        import("./components/lts/lts.module").then(
                            (m) => m.LTSModule
                        ),
                },

                {
                    path: "menu",
                    loadChildren: () =>
                        import("./components/menu/menudemo.module").then(
                            (m) => m.MenuDemoModule
                        ),
                },
                {
                    path: "misc",
                    loadChildren: () =>
                        import("./misc/misc.module").then((m) => m.MiscModule),
                },

                {
                    path: "menumodel",
                    loadChildren: () =>
                        import(
                            "./components/menumodel/menumodeldemo.module"
                        ).then((m) => m.MenuModelDemoModule),
                },
                {
                    path: "messages",
                    loadChildren: () =>
                        import(
                            "./components/messages/messagesdemo.module"
                        ).then((m) => m.MessagesDemoModule),
                },
                {
                    path: "multiselect",
                    loadChildren: () =>
                        import(
                            "./components/multiselect/multiselectdemo.module"
                        ).then((m) => m.MultiSelectDemoModule),
                },
                {
                    path: "orderlist",
                    loadChildren: () =>
                        import(
                            "./components/orderlist/orderlistdemo.module"
                        ).then((m) => m.OrderListDemoModule),
                },
                {
                    path: "organizationchart",
                    loadChildren: () =>
                        import(
                            "./components/organizationchart/organizationchartdemo.module"
                        ).then((m) => m.OrganizationChartDemoModule),
                },
                {
                    path: "overlaypanel",
                    loadChildren: () =>
                        import(
                            "./components/overlaypanel/overlaypaneldemo.module"
                        ).then((m) => m.OverlayPanelDemoModule),
                },
                {
                    path: "paginator",
                    loadChildren: () =>
                        import(
                            "./components/paginator/paginatordemo.module"
                        ).then((m) => m.PaginatorDemoModule),
                },
                {
                    path: "panel",
                    loadChildren: () =>
                        import("./components/panel/paneldemo.module").then(
                            (m) => m.PanelDemoModule
                        ),
                },
                {
                    path: "panelmenu",
                    loadChildren: () =>
                        import(
                            "./components/panelmenu/panelmenudemo.module"
                        ).then((m) => m.PanelMenuDemoModule),
                },
                {
                    path: "password",
                    loadChildren: () =>
                        import(
                            "./components/password/passworddemo.module"
                        ).then((m) => m.PasswordDemoModule),
                },

                {
                    path: "progressspinner",
                    loadChildren: () =>
                        import(
                            "./components/progressspinner/progressspinnerdemo.module"
                        ).then((m) => m.ProgressSpinnerDemoModule),
                },

                {
                    path: "rating",
                    loadChildren: () =>
                        import("./components/rating/ratingdemo.module").then(
                            (m) => m.RatingDemoModule
                        ),
                },
                {
                    path: "responsive",
                    loadChildren: () =>
                        import(
                            "./components/responsive/responsivedemo.module"
                        ).then((m) => m.ResponsiveDemoModule),
                },
                {
                    path: "rtl",
                    loadChildren: () =>
                        import("./components/rtl/rtldemo.module").then(
                            (m) => m.RTLDemoModule
                        ),
                },
                {
                    path: "scrollpanel",
                    loadChildren: () =>
                        import(
                            "./components/scrollpanel/scrollpaneldemo.module"
                        ).then((m) => m.ScrollPanelDemoModule),
                },
                {
                    path: "selectbutton",
                    loadChildren: () =>
                        import(
                            "./components/selectbutton/selectbuttondemo.module"
                        ).then((m) => m.SelectButtonDemoModule),
                },
                {
                    path: "sidebar",
                    loadChildren: () =>
                        import("./components/sidebar/sidebardemo.module").then(
                            (m) => m.SidebarDemoModule
                        ),
                },
                {
                    path: "slidemenu",
                    loadChildren: () =>
                        import(
                            "./components/slidemenu/slidemenudemo.module"
                        ).then((m) => m.SlideMenuDemoModule),
                },
                {
                    path: "slider",
                    loadChildren: () =>
                        import("./components/slider/sliderdemo.module").then(
                            (m) => m.SliderDemoModule
                        ),
                },
                {
                    path: "spinner",
                    loadChildren: () =>
                        import("./components/spinner/spinnerdemo.module").then(
                            (m) => m.SpinnerDemoModule
                        ),
                },
                {
                    path: "splitbutton",
                    loadChildren: () =>
                        import(
                            "./components/splitbutton/splitbuttondemo.module"
                        ).then((m) => m.SplitButtonDemoModule),
                },
                {
                    path: "steps",
                    loadChildren: () =>
                        import("./components/steps/stepsdemo.module").then(
                            (m) => m.StepsDemoModule
                        ),
                },
                {
                    path: "support",
                    loadChildren: () =>
                        import("./components/support/support.module").then(
                            (m) => m.SupportModule
                        ),
                },
                {
                    path: "table",
                    loadChildren: () =>
                        import("./components/table/tabledemo.module").then(
                            (m) => m.TableDemoModule
                        ),
                },
                {
                    path: "tabmenu",
                    loadChildren: () =>
                        import("./components/tabmenu/tabmenudemo.module").then(
                            (m) => m.TabMenuDemoModule
                        ),
                },
                {
                    path: "tabview",
                    loadChildren: () =>
                        import("./components/tabview/tabviewdemo.module").then(
                            (m) => m.TabViewDemoModule
                        ),
                },
                {
                    path: "terminal",
                    loadChildren: () =>
                        import(
                            "./components/terminal/terminaldemo.module"
                        ).then((m) => m.TerminalDemoModule),
                },
                {
                    path: "tieredmenu",
                    loadChildren: () =>
                        import(
                            "./components/tieredmenu/tieredmenudemo.module"
                        ).then((m) => m.TieredMenuDemoModule),
                },
                {
                    path: "toast",
                    loadChildren: () =>
                        import("./components/toast/toastdemo.module").then(
                            (m) => m.ToastDemoModule
                        ),
                },
                {
                    path: "togglebutton",
                    loadChildren: () =>
                        import(
                            "./components/togglebutton/togglebuttondemo.module"
                        ).then((m) => m.ToggleButtonDemoModule),
                },
                {
                    path: "toolbar",
                    loadChildren: () =>
                        import("./components/toolbar/toolbardemo.module").then(
                            (m) => m.ToolbarDemoModule
                        ),
                },
                {
                    path: "tooltip",
                    loadChildren: () =>
                        import("./components/tooltip/tooltipdemo.module").then(
                            (m) => m.TooltipDemoModule
                        ),
                },
                {
                    path: "tree",
                    loadChildren: () =>
                        import("./components/tree/treedemo.module").then(
                            (m) => m.TreeDemoModule
                        ),
                },
                {
                    path: "treetable",
                    loadChildren: () =>
                        import(
                            "./components/treetable/treetabledemo.module"
                        ).then((m) => m.TreeTableDemoModule),
                },
                {
                    path: "tristatecheckbox",
                    loadChildren: () =>
                        import(
                            "./components/tristatecheckbox/tristatecheckboxdemo.module"
                        ).then((m) => m.TriStateCheckboxDemoModule),
                },
                {
                    path: "validation",
                    loadChildren: () =>
                        import(
                            "./components/validation/validationdemo.module"
                        ).then((m) => m.ValidationDemoModule),
                },
                {
                    path: "virtualscroller",
                    loadChildren: () =>
                        import(
                            "./components/virtualscroller/virtualscrollerdemo.module"
                        ).then((m) => m.VirtualScrollerDemoModule),
                },
            ],
            { scrollPositionRestoration: "enabled" }
        ),
    ],
    exports: [RouterModule],
})
export class AppRoutingModule {}
