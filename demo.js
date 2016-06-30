angular.module('demoApp')
.controller('rxFormDemoCtrl', function ($scope) {
    /* ========== DATA ========== */
    $scope.volumeTypes = [
        {
            'value': 'SATA',
            'label': 'SATA'
        },
        {
            'value': 'SSD',
            'label': 'SSD'
        },
        {
            'value': 'CD',
            'label': 'CD'
        },
        {
            'value': 'DVD',
            'label': 'DVD'
        },
        {
            'value': 'BLURAY',
            'label': 'BLURAY'
        },
        {
            'value': 'TAPE',
            'label': 'TAPE'
        },
        {
            'value': 'FLOPPY',
            'label': 'FLOPPY'
        },
        {
            'value': 'LASERDISC',
            'label': 'LASERDISC'
        },
        {
            'value': 'JAZDRIVE',
            'label': 'JAZDRIVE'
        },
        {
            'value': 'PUNCHCARDS',
            'label': 'PUNCHCARDS'
        },
        {
            'value': 'RNA',
            'label': 'RNA'
        }
    ];

    $scope.services = [
        {
            'value': 'good',
            'label': 'Good Service'
        },
        {
            'value': 'cheap',
            'label': 'Cheap Service'
        },
        {
            'value': 'fast',
            'label': 'Fast Service'
        },
        {
            'value': 'custom',
            'label': 'Custom Service'
        }
    ];

    $scope.beatles = [
        'Paul McCartney',
        'John Lennon',
        'Ringo Starr',
        'George Harrison'
    ];

    $scope.nevers = [
        'Give you up',
        'Let you down',
        'Run around',
        'Desert you',
        'Make you cry',
        'Say goodbye',
        'Tell a lie',
        'Hurt you'
    ];

    $scope.optionTableData = [
        {
            'id': 'option1_id',
            'name': 'Option #1',
            'value': 0,
            'obj': {
                'name': 'Nested Name 1'
            }
        }, {
            'id': 'option2_id',
            'name': 'Option #2',
            'value': 1,
            'obj': {
                'name': 'Nested Name 2'
            }
        }, {
            'id': 'option3_id',
            'name': 'Option #3',
            'value': 2,
            'obj': {
                'name': 'Nested Name 3'
            }
        }, {
            'id': 'option4_id',
            'name': 'Option #4',
            'value': 3,
            'obj': {
                'name': 'Nested Name 4'
            }
        }
    ];

    $scope.optionTableColumns = [
        {
            'label': 'Name',
            'key': 'name',
            'selectedLabel': '(Already saved data)'
        }, {
            'label': 'Static Content',
            'key': 'Some <strong>Text &</strong> HTML'
        }, {
            'label': 'Expression 2',
            'key': '{{ value * 100 | number:2 }}'
        }, {
            'label': 'Expression 3',
            'key': '{{ obj.name | uppercase }}'
        }, {
            'label': 'Expression 4',
            'key': '{{ value | currency }}'
        }
    ];

    $scope.optionTableCheckboxData = [
        {
            'name': 'Item 1'
        }, {
            'name': 'Item 2',
            'value': 'checked',
            'falseValue': 'unchecked'
        }
    ];

    $scope.optionTableEmptyData = [];

    /* ========== FUNCTIONS ========== */
    $scope.disableOption = function (tableId, fieldId, rowId) {
        return rowId === 'option4_id';
    };

    /* ========== FORM MODELS ========== */
    $scope.simple = {
        userEmail: '',
        // TODO: use isNameRequired for rxFieldName "required" midway tests
        // TODO: remove this comment after completed
        isNameRequired: true,
        volumeName: ''
    };

    $scope.intermediate = {
        volumeType: _.first($scope.volumeTypes).value, // select the first type by default
        services: [],
        favoriteBeatle: 'all',
        settings: {
            first: true,
            second: false,
            third: true,
            fourth: false
        },
        table: {
            radio: 0,
            checkbox: [true, 'unchecked'], // example with first checkbox automatically checked
            empty: [true, 'unchecked']
        }
    };

    $scope.advanced = {
        radChoice: 'default',
        inputEnabled: false
    };
});

// A dummy directive only used within the rxForm demo page.
// It's used to check that some string contains 'foo', and works
// with ngForm to set the appropriate `.$error` value
// Note: This code is easier to write in Angular 1.3, because
// you can use `.$validators` instead of `.$parsers`
angular.module('encore.ui.rxForm')
.directive('foocheck', function () {
    return {
        require: 'ngModel',
        link: function (scope, elm, attrs, ctrl) {
            // Put a new validator on the beginning
            ctrl.$parsers.unshift(function (viewValue) {
                if (_.contains(viewValue, 'foo')) {
                    ctrl.$setValidity('foocheck', true);
                    return viewValue;
                } else {
                    ctrl.$setValidity('foocheck', false);
                    return undefined;
                }
            });
        }
    };
});

angular.module('demoApp')
.controller('rxRadioCtrl', function ($scope) {
    $scope.validEnabled = 1;
    $scope.validDisabled = 1;
    $scope.validNgDisabled = 1;

    $scope.invalidEnabled = 1;
    $scope.invalidDisabled = 1;
    $scope.invalidNgDisabled = 1;

    $scope.radCreateDestroy = 'destroyed';
    $scope.plainHtmlRadio = 'isChecked';
});

angular.module('demoApp')
.controller('rxSortableColumnCtrl', function ($scope, rxSortUtil) {
    $scope.sort = rxSortUtil.getDefault('name', false);

    $scope.sortCol = function (predicate) {
        return rxSortUtil.sortCol($scope, predicate);
    };

    $scope.talentPool = [
        {
            name: 'Andrew Yurisich',
            jobTitle: 'Mailroom Associate IV'
        },
        {
            name: 'Patrick Deuley',
            jobTitle: 'Design Chaplain'
        },
        {
            name: null,
            jobTitle: 'Chief Mastermind'
        },
        {
            jobTitle: 'Assistant Chief Mastermind'
        },
        {
            name: 'Hussam Dawood',
            jobTitle: 'Evangelist of Roger Enriquez'
        },
        {
            name: 'Kerry Bowley',
            jobTitle: 'Dev Mom'
        },
    ];
});

angular.module('demoApp')
.controller('rxStatusColumnCtrl', function ($scope, rxStatusMappings, rxSortUtil) {
    $scope.servers = [
        { status: 'ACTIVE', title: 'ACTIVE status' },
        { status: 'ERROR', title: 'ERROR status' },
        { status: 'DISABLED', title: 'DISABLED status' },
        { status: 'DELETED', title: 'DELETED status mapped to ERROR' },
        { status: 'UNKNOWN', title: 'UNKNOWN status mapped to ERROR' },
        { status: 'RESCUE', title: 'RESCUE status mapped to INFO' },
        { status: 'SUSPENDED', title: 'SUSPENDED status mapped to WARNING' },
        { status: 'REBUILD', title: 'REBUILD status mapped to PENDING' },
        { status: 'RESIZE', title: 'RESIZE status mapped to PENDING' },
        { status: 'MIGRATING', title: 'MIGRATING status mapped to PENDING' },
        { status: 'DELETING', title: 'DELETING status mapped to PENDING, using `fooApi` mapping', api: 'fooApi' }
    ];

    // We have a few different ways of adding mappings. We've tried to show them all here
    rxStatusMappings.addGlobal({
        'DELETING': 'PENDING'
    });
    rxStatusMappings.mapToInfo('RESCUE');
    rxStatusMappings.mapToWarning('SUSPENDED');
    rxStatusMappings.mapToPending(['REBUILD','RESIZE','MIGRATING']);
    rxStatusMappings.mapToError(['DELETED', 'UNKNOWN']);
    rxStatusMappings.addAPI('fooApi', { 'DELETING': 'PENDING' });
    rxStatusMappings.mapToPending('SomeApiSpecificStatus', 'fooApi');
    $scope.sortCol = function (predicate) {
        return rxSortUtil.sortCol($scope, predicate);
    };
    $scope.sort = rxSortUtil.getDefault('status');
});

angular.module('demoApp')
.controller('rxActionMenuCtrl', function ($scope, rxNotify) {
    $scope.add = function () {
        rxNotify.add('Added!', {
            type: 'success',
            repeat: false,
            timeout: 3
        });
    };

    $scope.remove = function () {
        rxNotify.add('Deleted!', {
            type: 'error',
            repeat: false,
            timeout: 3
        });
    };
});

angular.module('demoApp')
.controller('rxCheckboxCtrl', function ($scope) {
    $scope.chkValidEnabledOne = true;
    $scope.chkValidEnabledTwo = false;
    $scope.chkValidDisabledOne = true;
    $scope.chkValidDisabledTwo = false;
    $scope.chkValidNgDisabledOne = true;
    $scope.chkValidNgDisabledTwo = false;

    $scope.chkInvalidEnabledOne = true;
    $scope.chkInvalidEnabledTwo = false;
    $scope.chkInvalidDisabledOne = true;
    $scope.chkInvalidDisabledTwo = false;
    $scope.chkInvalidNgDisabledOne = true;
    $scope.chkInvalidNgDisabledTwo = false;
});

angular.module('demoApp')
.controller('rxDatePickerCtrl', function ($scope) {
    $scope.enabledValid = '2015-12-15';
    $scope.disabledValid = '2015-12-15';

    $scope.enabledInvalid = '2015-12-15';
    $scope.disabledInvalid = '2015-12-15';
});

angular.module('demoApp')
.controller('rxTimePickerCtrl', function ($scope) {
    $scope.enabledValid = '06:00-06:00';
    $scope.disabledValid = '20:00+08:00';

    $scope.enabledInvalid = '17:45+05:00';
    $scope.disabledInvalid = '05:15+00:00';
});

angular.module('demoApp')
.controller('formsAutoSaveExampleController', function ($scope, rxAutoSave) {
    $scope.forms = { autosave: '' };
    rxAutoSave($scope, 'forms');
});

angular.module('demoApp')
.controller('formsDisabledExamplesCtrl', function ($scope) {
    $scope.txtDisabled = 'Disabled Text Input';
    $scope.selDisabled = 'disabled';
    $scope.radDisabled = 1;
    $scope.chkDisabledOne = true;
    $scope.chkDisabledTwo = false;
    $scope.togDisabledOn = true;
    $scope.togDisabledOff = false;
    $scope.txtAreaDisabled = 'Disabled Textarea';
});

angular.module('demoApp')
.controller('formsManualSaveExampleController', function ($scope, $timeout, rxNotify) {
    $scope.saving = false;
    $scope.save = function () {
        $scope.saving = true;
        rxNotify.clear('page');
        $timeout(function () {
            $scope.saving = false;
            $scope.lastSaved = Date.now();
            rxNotify.add('Data successfully saved!', {
                type: 'success'
            });
        }, 1000);
    };
});

angular.module('demoApp')
.controller('formsInvalidExamplesCtrl', function ($scope) {
    $scope.txtInvalid = 'Invalid text input';
    $scope.selInvalid = 'invalid';
    $scope.radInvalid = 1;
    $scope.chkInvalidOne = true;
    $scope.chkInvalidTwo = false;
    $scope.togInvalidOn = true;
    $scope.togInvalidOff = false;
    $scope.txtAreaInvalid = 'Invalid Value';
});

angular.module('demoApp')
.controller('rxCheckboxShowHideCtrl', function ($scope) {
    $scope.amSure = false;
    $scope.amReallySure = false;

    $scope.$watch('amSure', function (newVal) {
        if (newVal === false) {
            $scope.amReallySure = false;
        }
    });
});

angular.module('demoApp')
.controller('rxDatePickerEmptyCtrl', function ($scope) {
    $scope.emptyDate = '';

    $scope.undefinedDate = undefined;
});

angular.module('demoApp')
.controller('rxDatePickerSimpleCtrl', function ($scope) {
    $scope.dateModel = moment(new Date()).format('YYYY-MM-DD');
});

angular.module('demoApp')
.controller('rxTimePickerSimpleCtrl', function ($scope) {
    $scope.emptyValue = '';
    $scope.predefinedValue = '22:10-10:00';
});

angular.module('demoApp')
.controller('metadataSimpleExampleCtrl', function ($scope) {
    $scope.someDate = new Date('January 6 1989');
    $scope.someAmount = 192.68;
});

angular.module('demoApp')
.controller('rxStatusMappingsSimpleCtrl', function ($scope, rxStatusMappings) {
    $scope.servers = [
        { status: 'ACTIVE', title: 'ACTIVE status' },
        { status: 'ERROR', title: 'ERROR status' },
        { status: 'DISABLED', title: 'DISABLED status' },
        { status: 'DELETED', title: 'DELETED status mapped to ERROR' },
        { status: 'UNKNOWN', title: 'UNKNOWN status mapped to ERROR' },
        { status: 'RESCUE', title: 'RESCUE status mapped to INFO' },
        { status: 'SUSPENDED', title: 'SUSPENDED status mapped to WARNING' },
        { status: 'REBUILD', title: 'REBUILD status mapped to PENDING' },
        { status: 'RESIZE', title: 'RESIZE status mapped to PENDING' },
        { status: 'MIGRATING', title: 'MIGRATING status mapped to PENDING' },
        { status: 'DELETING', title: 'DELETING status mapped to PENDING, using `fooApi` mapping', api: 'fooApi' }
    ];

    // We have a few different ways of adding mappings. We've tried to show them all here
    rxStatusMappings.addGlobal({
        'DELETING': 'PENDING'
    });
    rxStatusMappings.mapToInfo('RESCUE');
    rxStatusMappings.mapToWarning('SUSPENDED');
    rxStatusMappings.mapToPending(['REBUILD','RESIZE','MIGRATING']);
    rxStatusMappings.mapToError(['DELETED', 'UNKNOWN']);
    rxStatusMappings.addAPI('fooApi', { 'DELETING': 'PENDING' });
    rxStatusMappings.mapToPending('SomeApiSpecificStatus', 'fooApi');
});

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxCollapse.html',
    '<rx-collapse class="demo-with-title" title="A Custom Title" expanded="true">You can put whatever content you want to inside here</rx-collapse><h3>\'See more/See less\' for use with metadata</h3><rx-metadata><section><rx-meta label="Name">Lorem ipsum dolor sit amet</rx-meta><rx-meta label="ID">1aa2bfa9-de8d-42f7-9f6de6437855b36e</rx-meta><rx-meta label="Region">ORD</rx-meta><rx-meta label="Created">December 2, 2014 @ 14:28</rx-meta><rx-collapse class="demo-no-title" expanded="false"><rx-meta label="Name">Lorem ipsum dolor sit amet</rx-meta><rx-meta label="ID">1aa2bfa9-de8d-42f7-9f6de6437855b36e</rx-meta><rx-meta label="Region">ORD</rx-meta><rx-meta label="Created">December 2, 2014 @ 14:28</rx-meta></rx-collapse></section></rx-metadata>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxForm.html',
    '<div ng-controller="rxFormDemoCtrl"><form rx-form name="demoForm" style="max-width: 1100px"><h2>Simple Controls</h2><h3>Text Inputs</h3><rx-help-text>Three <code>rx-field</code> elements each consume between 250px and 1/3 of the width.</rx-help-text><rx-form-section><rx-field><rx-field-name id="fieldNamePlainTextbox">Plain Textbox:</rx-field-name><rx-field-content><rx-input><input type="text" id="txtPlain"></rx-input></rx-field-content></rx-field><rx-field><rx-field-name>IP Address:</rx-field-name><rx-field-content><rx-input><input name="ipaddress" type="text" disabled="disabled" placeholder="127.0.0.1"></rx-input></rx-field-content></rx-field><rx-field><rx-field-name>Monthly Cost:</rx-field-name><rx-field-content><rx-input><rx-prefix>$</rx-prefix><input type="number"><rx-suffix>million</rx-suffix></rx-input></rx-field-content></rx-field></rx-form-section><h2>Text Area</h2><rx-help-text>One <code>rx-field</code> element consumes the full width.</rx-help-text><rx-form-section><rx-field><rx-field-name>Life Story:</rx-field-name><rx-field-content><rx-input><textarea name="lifeStory" rows="10"></textarea></rx-input><rx-help-text>The <code>cols</code> attribute is moot, CSS will handle the width.</rx-help-text></rx-field-content></rx-field></rx-form-section><h2>Intermediate Controls</h2><h3>Text Inputs With Validation</h3><rx-help-text>Two <code>rx-field</code> elements each consume between 250px and 1/2 of the width.</rx-help-text><rx-form-section><rx-field><rx-field-name ng-required="simple.isNameRequired" id="fieldNameVolumeName">Volume Name:</rx-field-name><rx-field-content><rx-input><input type="text" id="txtVolumeName" name="txtVolumeName" ng-model="simple.volumeName" ng-required="simple.isNameRequired" ng-pattern="/^\\b(\\w)?(\\w)\\w?\\2\\1$/"></rx-input><rx-help-text>Must be 2-5 letter palindrome (e.g. \'dewed\')</rx-help-text><rx-help-text>Bound Value: {{simple.volumeName}}</rx-help-text><rx-input><input rx-checkbox id="chkVolumeNameRequired" ng-model="simple.isNameRequired"><label for="chkVolumeNameRequired">Check and uncheck with empty volume name to see border</label></rx-input></rx-field-content></rx-field><rx-field><rx-field-name>Email Address:</rx-field-name><rx-field-content><rx-input><input name="userEmail" type="email" ng-model="simple.userEmail" foocheck></rx-input><rx-help-text>Must contain foo.</rx-help-text><rx-inline-error ng-show="demoForm.userEmail.$error.email">Invalid Email</rx-inline-error><rx-inline-error ng-show="demoForm.userEmail.$error.foocheck">Your email must contain \'foo\'</rx-inline-error></rx-field-content></rx-field></rx-form-section><h3>Drop-Down Selection</h3><rx-form-section><!-- rxSelect --><rx-field><h4>Single Selection</h4><rx-field-name>Volume Type:</rx-field-name><rx-field-content><rx-input><select rx-select ng-model="intermediate.volumeType" id="selVolumeType"><option ng-repeat="type in volumeTypes" value="{{type.value}}" ng-selected="{{type.value == model}}">{{type.label}}</option></select></rx-input><rx-help-text>Bound Value: {{intermediate.volumeType}}</rx-help-text></rx-field-content></rx-field><!-- rxMultiSelect --><rx-field><h4>Multiple Selection</h4><rx-field-name>Service Options:</rx-field-name><rx-field-content><rx-input><rx-multi-select ng-model="intermediate.services" id="mselServices"><rx-select-option ng-repeat="service in services" value="{{service.value}}">{{service.label}}</rx-select-option></rx-multi-select></rx-input><rx-help-text>Bound Value: {{intermediate.services}}</rx-help-text></rx-field-content></rx-field></rx-form-section><h3>Input Groups</h3><rx-form-section><!-- rxRadio --><rx-field><h4>Radio Group</h4><rx-field-name>Favorite Beatles Member:</rx-field-name><rx-field-content><rx-input ng-repeat="beatle in beatles"><input rx-radio name="favBeatle" id="favBeatle_{{$index}}" value="{{beatle}}" ng-model="intermediate.favoriteBeatle"><label for="favBeatle_{{$index}}">{{beatle}}</label></rx-input><rx-input><input rx-radio name="favBeatle" id="favBeatle_all" value="all" ng-model="intermediate.favoriteBeatle"><label for="favBeatle_all">All of the above</label></rx-input><rx-input><input rx-radio name="favBeatle" id="favBeatle_none" value="none" disabled="disabled" ng-model="intermediate.favoriteBeatle"><label for="favBeatle_none">None of the above</label></rx-input></rx-field-content></rx-field><!-- rxCheckbox --><rx-field><h4>Checkbox Group</h4><rx-field-name>Rick Astley Will Never:</rx-field-name><rx-field-content><rx-input ng-repeat="never in nevers"><input rx-checkbox id="chkNever_{{$index}}" checked="checked" value="{{never}}"><label for="chkNever_{{$index}}">{{never}}</label></rx-input><rx-input><input rx-checkbox id="chkNever_all" value="all" checked="checked" disabled="disabled"><label for="chkNever_all">All of the above</label></rx-input></rx-field-content></rx-field><!-- rxToggleSwitch --><rx-field><h4>Toggle Switches</h4><rx-field-name>Settings:</rx-field-name><rx-field-content><rx-input><rx-prefix><rx-toggle-switch id="setting1" ng-model="intermediate.settings.first"></rx-toggle-switch><label for="setting1">Setting 1</label></rx-prefix></rx-input><rx-input><rx-prefix><rx-toggle-switch id="setting2" ng-model="intermediate.settings.second"></rx-toggle-switch><label for="setting2">Setting 2</label></rx-prefix></rx-input><rx-input><rx-prefix><rx-toggle-switch id="setting3" ng-model="intermediate.settings.third" disabled="true"></rx-toggle-switch><label for="setting3">Setting 3</label></rx-prefix></rx-input><rx-input><rx-prefix><rx-toggle-switch id="setting4" ng-model="settings.fourth" disabled="true"></rx-toggle-switch><label for="setting4">Setting 4</label></rx-prefix></rx-input></rx-field-content></rx-field></rx-form-section><h3>rxOptionTable</h3><rx-form-section><rx-field><rx-field-name>Radio Option Table</rx-field-name><rx-field-content><rx-input><rx-option-table id="radioOptionTable" data="optionTableData" columns="optionTableColumns" type="radio" model="intermediate.table.radio" field-id="optionTable" selected="0" class="full-width" disable-fn="disableOption(tableId, fieldId, rowId)"></rx-option-table></rx-input><rx-help-text>Bound Value: {{intermediate.table.radio}}</rx-help-text></rx-field-content></rx-field></rx-form-section><rx-form-section><rx-field><rx-field-name>Checkbox Option Table</rx-field-name><rx-field-content><rx-input><rx-option-table columns="optionTableColumns" type="checkbox" id="checkboxOptionTable" model="intermediate.table.checkbox" field-id="optionCheckboxTable" data="optionTableCheckboxData" required="true"></rx-option-table></rx-input><rx-help-text ng-repeat="val in intermediate.table.checkbox">Item {{$index + 1}} Value: {{val}}</rx-help-text></rx-field-content></rx-field></rx-form-section><rx-form-section><rx-field><rx-field-name>Empty Option Table</rx-field-name><rx-field-content><rx-input><rx-option-table columns="optionTableColumns" type="checkbox" id="emptyOptionTable" model="intermediate.table.empty" field-id="optionCheckboxTable" data="optionTableEmptyData" empty-message="You don\'t have any data!"></rx-option-table></rx-input></rx-field-content></rx-field></rx-form-section><h2>Advanced Controls</h2><h3>With <code>stacked</code> section attribute</h3><rx-help-text>To obtain a stacked layout, place the <code>stacked</code> attribute on <code>rx-form-section</code>.</rx-help-text><rx-form-section stacked><!-- Radio Option + Select --><rx-field><rx-field-name>Radio + Select</rx-field-name><rx-field-content><rx-input><rx-prefix><input rx-radio id="radDefault" name="radAdvanced" ng-model="advanced.radChoice" value="default"><label for="radDefault">Default</label></rx-prefix></rx-input><rx-input><rx-prefix><input rx-radio id="radCustom" name="radAdvanced" ng-model="advanced.radChoice" value="custom"><label for="radCustom">Custom:</label><br></rx-prefix><select rx-select ng-disabled="advanced.radChoice !== \'custom\'"><option>Option 1</option><option>Option 2</option><option>Option 3</option></select></rx-input><rx-help-text>Useful for condensing large radio groups.</rx-help-text></rx-field-content></rx-field><!-- Checkbox + Text --><rx-field><rx-field-name>Checkbox + Text Input</rx-field-name><rx-field-content><rx-input><rx-prefix><input rx-checkbox ng-model="advanced.inputEnabled"><label>Label:</label></rx-prefix><input type="text" ng-disabled="!advanced.inputEnabled" placeholder="Enter Text"></rx-input><rx-help-text>Useful for if you want the user to add an optional value, but displaying the field as disabled by default.</rx-help-text></rx-field-content></rx-field></rx-form-section><h3>With <code>controlled-width</code> section attribute</h3><rx-help-text>To prevent fields from taking up too much horizontal space, use the <code>controlled-width</code> attribute on <code>rx-form-section</code>. The fields will still stack if horizontal space is constrained, but they will not exceed a reasonable field width.</rx-help-text><rx-form-section controlled-width><!-- Dropdown + Text + Dropdown --><rx-field><rx-field-name>Name:</rx-field-name><rx-field-content><rx-input><rx-prefix><select rx-select><option></option><option>Mr.</option><option>Mrs.</option><option>Ms.</option></select></rx-prefix><input type="text"><rx-suffix><select rx-select><option></option><option>Jr.</option><option>Sr.</option></select></rx-suffix></rx-input><rx-help-text>Dropdown + Text Input + Dropdown</rx-help-text></rx-field-content></rx-field><rx-field><rx-field-name>Search Box:</rx-field-name><rx-field-content><rx-input><rx-search-box ng-model="demoSearch" rx-placeholder="\'Filter by...\'"></rx-search-box></rx-input><rx-help-text>Using <code>rx-search-box</code>.</rx-help-text></rx-field-content></rx-field></rx-form-section><h2>Advanced Text Area</h2><h3 class="subdued">With additional info side-by-side.</h3><rx-form-section><rx-field><rx-field-name id="fieldNameRequiredTextarea" ng-required="true">Required Textarea:</rx-field-name><rx-field-content><rx-input><textarea name="lifeStory" rows="10" ng-required="true" ng-model="lifeStory" rx-character-count></textarea></rx-input></rx-field-content></rx-field><div><rx-help-text><p>Oh look! It\'s using <code>rx-character-count</code></p><p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed tempus id ligula sit amet rhoncus. Quisque semper mi vel tortor sodales, eget dapibus turpis consectetur. Ut tristique nibh porttitor diam porta finibus. Vivamus porttitor ligula sed ipsum rhoncus, id lobortis ex volutpat. Ut ut metus erat. Nam et convallis enim. Proin efficitur quam tortor, vitae hendrerit libero auctor ac. Sed vitae lobortis quam, quis commodo metus. Vestibulum felis arcu, consectetur ut vulputate nec, commodo ut odio.</p></rx-help-text><span ng-if="demoForm.lifeStory.$dirty"><rx-inline-error ng-show="demoForm.lifeStory.$error.required">Cannot Be Blank</rx-inline-error></span></div></rx-form-section><!-- form actions, no special class required --><h2>Form Actions</h2><rx-help-text>No CSS class required</rx-help-text><rx-form-section><div><button class="button submit" type="submit">Submit Form</button> <button class="button cancel" type="submit">Cancel</button></div></rx-form-section></form></div>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxRadio.html',
    '<!-- Sample HTML goes here as a live example of how the component can be used --><div ng-controller="rxRadioCtrl"><h3>Examples</h3><h3>Show/Hide Input</h3><p><strong>Do you like bacon?</strong> <small ng-show="likesbacon">({{likesbacon}})</small></p><p><input rx-radio id="radHateBacon" value="hate it" ng-model="likesbacon" ng-required="true"><label for="radHateBacon">I hate bacon</label></p><p><input rx-radio id="radLikeBacon" value="like it" ng-model="likesbacon" ng-required="true"><label for="radLikeBacon">I like bacon</label></p><p ng-show="likesbacon && likesbacon !== \'hate it\'"><input rx-radio id="radLoveBacon" value="love it" ng-model="likesbacon" ng-required="true"><label for="radLoveBacon">Actually, I LOVE bacon</label></p><br><h3>Destroy Input</h3><p>Support for <code>$destroy</code> events.</p><p><span><input rx-radio id="radDestroyed" value="destroyed" ng-model="radCreateDestroy"><label for="radDestroy">Destroyed</label></span>&nbsp; <span><input rx-radio id="radCreated" value="created" ng-model="radCreateDestroy"><label for="radCreate">Created</label></span></p><p>The following radio is <code>{{radCreateDestroy}}</code>: <input rx-radio checked="checked" id="radTargetCreated" ng-if="radCreateDestroy === \'created\'"></p><!-- END DEMO CODE --><!-- END DEMO CODE --><!-- END DEMO CODE --><h3>Radio States</h3><table><thead><tr><th></th><th>Enabled</th><th>Disabled (ng-disable)</th><th>Disabled (disabled)</th></tr></thead><tbody><tr><th>Valid</th><!-- Valid Enabled --><td><p><input rx-radio id="radValidEnabledOne" value="1" ng-model="validEnabled"><label for="radValidEnabledOne">Selected</label></p><p><input rx-radio id="radValidEnabledTwo" value="2" ng-model="validEnabled"><label for="radValidEnabledTwo">Unselected</label></p></td><!-- Valid NG-Disabled --><td><p><input rx-radio id="radValidNgDisabledOne" value="1" ng-disabled="true" ng-model="validNgDisabled"><label for="radValidNgDisabledOne">Selected</label></p><p><input rx-radio id="radValidNgDisabledTwo" value="2" ng-disabled="true" ng-model="validNgDisabled"><label for="radValidNgDisabledTwo">Unselected</label></p></td><!-- Valid Disabled --><td><p><input rx-radio id="radValidDisabledOne" value="1" disabled="disabled" ng-model="validDisabled"><label for="radValidDisabledOne">Selected</label></p><p><input rx-radio id="radValidDisabledTwo" value="2" disabled="disabled" ng-model="validDisabled"><label for="radValidDisabledTwo">Unselected</label></p></td></tr><tr><th>Invalid</th><!-- Invalid Enabled --><td><p><input rx-radio id="radInvalidEnabledOne" value="1" ng-model="invalidEnabled" always-invalid><label for="radInvalidEnabledOne">Selected</label></p><p><input rx-radio id="radInvalidEnabledTwo" value="2" ng-model="invalidEnabled" always-invalid><label for="radInvalidEnabledTwo">Unselected</label></p></td><!-- Invalid NG-Disabled --><td><p><input rx-radio id="radInvalidNgDisabledOne" value="1" ng-disabled="true" ng-model="invalidNgDisabled" always-invalid><label for="radInvalidNgDisabledOne">Selected</label></p><p><input rx-radio id="radInvalidNgDisabledTwo" value="2" ng-disabled="true" ng-model="invalidNgDisabled" always-invalid><label for="radInvalidNgDisabledTwo">Unselected</label></p></td><!-- Invalid Disabled --><td><p><input rx-radio id="radInvalidDisabledOne" value="1" disabled="disabled" ng-model="invalidDisabled" always-invalid><label for="radInvalidDisabledOne">Selected</label></p><p><input rx-radio id="radInvalidDisabledTwo" value="2" disabled="disabled" ng-model="invalidDisabled" always-invalid><label for="radInvalidDisabledTwo">Unselected</label></p></td></tr></tbody></table><h3>Plain HTML Radios (for comparison)</h3><p><input type="radio" id="plainHtmlNormal" ng-model="plainHtmlRadio" value="plain" ng-required="true"><label for="plainHtmlNormal">A plain radio</label></p><p><input type="radio" id="plainHtmlDisabled" value="disabled" ng-model="plainHtmlRadio" disabled="disabled"><label for="plainHtmlDisabled">A plain radio (disabled)</label></p><p><input type="radio" id="plainHtmlChecked" value="isChecked" ng-model="plainHtmlRadio"><label for="plainHtmlChecked">A plain radio (checked)</label></p><p><input type="radio" id="plainRadRemoveRadio" value="shows" ng-model="plainHtmlRadio"><label for="plainRadRemoveRadio">Add Following Radio:</label><input type="radio" id="plainRadRemoveable" value="hidden" ng-if="plainHtmlRadio === \'shows\'"></p></div>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxSortableColumn.html',
    '<div><table class="rs-list-table"><thead><tr><th scope="col"><rx-sortable-column sort-method="sortCol(property)" sort-property="name" predicate="sort.predicate" reverse="sort.reverse">Name</rx-sortable-column></th><th scope="col"><rx-sortable-column sort-method="sortCol(property)" sort-property="jobTitle" predicate="sort.predicate" reverse="sort.reverse">Occupation</rx-sortable-column></th><th scope="col"><rx-sortable-column sort-method="sortCol" sort-property="none" predicate="sort.predicate" reverse="sort.reverse">Testing Sort Errors (see Protractor Tab)</rx-sortable-column></th></tr></thead><tbody id="talentPoolData"><tr ng-repeat="resource in talentPool | orderBy:sort.predicate:sort.reverse"><td scope="row" class="talent-name">{{resource.name}}</td><td class="talent-job">{{resource.jobTitle}}</td><td></td></tr></tbody></table></div>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxStatusColumn.html',
    '<div><table class="table-striped demo-status-column-table"><thead><tr><th rx-status-header></th><th class="column-title">Title</th></tr></thead><tbody><tr ng-repeat="server in servers | orderBy: sort.predicate:sort.reverse "><!-- Both `api` and `tooltip-content` are optional --><td rx-status-column status="{{ server.status }}"></td><td>{{ server.title }}</td></tr></tbody></table></div>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('ActionMenu.docs.html',
    '<p>A component to create a configurable action menu.</p><h3 id="typical-usage">Typical Usage</h3><p>The cog in the first row is dismissable by clicking anywhere, but the second cog can only be dismissed by clicking on the cog itself.</p><rx-example name="ActionMenu.simple"></rx-example>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxActionMenu.html',
    '<div><p>The cog in the first row is dismissable by clicking anywhere, but the second cog can only be dismissed by clicking on the cog itself.</p><h3 id="typical-usage">Typical Usage</h3><table class="table-striped"><thead><tr><th>Name</th><th class="actions"></th></tr></thead><tbody><tr><td>Globally dismissible</td><td><rx-action-menu id="globalDismissal"><ul class="rs-dropdown-menu"><li><span class="rs-dropdown-category">Manage:</span></li><li><a href="#">Add</a></li><li><a href="#">Delete</a></li></ul></rx-action-menu></td></tr><tr><td>Only dismissible by clicking on cog</td><td><rx-action-menu global-dismiss="false"><ul class="rs-dropdown-menu"><li><span class="rs-dropdown-category">Manage:</span></li><li><a href="#">Add</a></li><li><a href="#">Delete</a></li></ul></rx-action-menu></td></tr><tr><td>Unorthodox Behaviors (no modals, hidden item)</td><td><rx-action-menu id="custom"><ul class="rs-dropdown-menu"><li><span class="rs-dropdown-category">Manage:</span></li><li><a href="#">Add</a></li><li><a href="#">Delete</a></li></ul></rx-action-menu></td></tr></tbody></table></div>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('forms.docs.html',
    '<h2 class="clear"><rx-permalink>Directives</rx-permalink></h2><ul class="list"><li>Many of the rxForm directives are designed for layout and positioning. However, there are some that are for stylistic purposes.</li><li>See <a href="ngdocs/index.html#/api/rxForm">rxForm API Documentation</a> for a more comprehensive list of available directives.</li></ul><h3><rx-permalink>Labels and Inputs</rx-permalink></h3><ul class="list"><li>You should remember that the rxFieldName isn\'t an HTML label element.<ul><li>rxFieldName is a descriptive design element for a particular form field.</li><li>An HTML label is used for accessibility.</li></ul></li><li>You should use the <code>&lt;label for="formControlId"&gt;</code> format when defining your HTML labels.<ul><li>The <code>for</code> attribute connects the label to an appropriate form control. When the label is clicked, wherever it is placed in the DOM, it will focus or activate its corresponding form control.</li><li><strong class="msg-warn">DO NOT wrap the control within a label element.</strong><ul><li>CSS does not have proper selectors to style label text based on control state</li></ul></li><li>You should place an HTML label around text in an appropriate rxFieldName element.</li><li>Inline HTML label elements should only be used with radios, checkboxes, and toggle switches.<ul><li>Place the label <strong>immediately after the form control</strong>.<ul><li>This enables you to style the label based on the state of the control.</li><li>See <a href="#/elements/Forms#checkboxes">checkboxes</a>, <a href="#/components/rxRadio">rxRadio</a>, and <a href="#/components/rxForm">rxForm</a> for markup examples.</li></ul></li></ul></li></ul></li><li>In contrast to its predecessor (rxFormItem), rxField and children provides you the flexibility to create form field inputs that make use of one or more controls.<ul><li>See "Advanced Controls" in <a href="#/components/rxForm">rxForm</a> demo for examples.</li></ul></li></ul><h3><rx-permalink>Error Messages</rx-permalink></h3><ul class="list"><li>Inline Error messages should make use of the <a href="ngdocs/index.html#/api/rxForm.directive:rxInlineError">rxInlineError </a>directive.</li><li>This directive is styled with bold and red text. It is not constrained by DOM hierarchy, so you may place it wherever it is necessary.</li></ul><h3><rx-permalink>Help Text</rx-permalink></h3><ul class="list"><li>Help text should make use of the <a href="ngdocs/index.html#/api/rxForm.directive:rxHelpText">rxHelpText </a>directive.</li><li>This directive is styled in a slightly smaller, italicized font and is not constrained by DOM hierarchy, so you can place it wherever it is necessary.</li></ul><h3><rx-permalink>Buttons</rx-permalink></h3><ul class="list"><li>Reference the <a href="#/elements/Links">links</a> and <a href="#/elements/Buttons">buttons</a> elements and the <a href="#/layout/page/form">Form Page</a> layout for details about how to style and color buttons.<ul><li>Submit buttons should use the green <code>.submit</code> class unless you are performing a destructive action, in which case, you should use the <code>.negative</code> class.</li></ul></li><li>If you need to use a button in your form field for auxiliary purposes, use the default blue.</li></ul><h3><rx-permalink>Selects</rx-permalink></h3><ul class="list"><li>For single item selection, use the <a href="#/components/rxSelect">rxSelect</a> component.</li><li>For multi-item selection, use the rxMultiSelect element defined in the <a href="#/components/rxMultiSelect">rxMultiSelect</a> component.</li></ul><!-- BEGIN: checkboxes --><h3><rx-permalink>Checkboxes</rx-permalink><a class="button xs inline" href="ngdocs/index.html#/api/elements.directive:rxCheckbox/">View API</a><!-- (NOTE) stability: \'READY\' --></h3><ul class="list"><li>Use the rxCheckbox directive for checkbox controls.</li><li>If you intend to use a label element, place it <strong>immediately after the rxCheckbox</strong> to style the label when the control is disabled.</li><li><strong class="msg-warn">DO NOT wrap rxCheckbox in a label element.</strong></li></ul><h4>Show/Hide Input</h4><rx-example name="rxCheckbox.showHide"></rx-example><h4>Destroy Input</h4><p>Support for <code>$destroy</code> events.</p><rx-example name="rxCheckbox.destroy"></rx-example><h4>Checkbox States<table ng-controller="rxCheckboxCtrl"><thead><tr><th></th><th>Enabled</th><th>Disabled (ng-disabled)</th><th>Disabled (disabled)</th></tr></thead><tbody><tr><th>Valid</th><!-- Valid Enabled--><td><p><input rx-checkbox id="chkValidEnabledOne" ng-model="chkValidEnabledOne"><label for="chkValidEnabled">Checked</label></p><p><input rx-checkbox id="chkValidEnabledTwo" ng-model="chkValidEnabledTwo"><label for="chkValidEnabledTwo">Unchecked</label></p></td><!-- Valid NG-Disabled --><td><p><input rx-checkbox id="chkValidNgDisabledOne" ng-disabled="true" ng-model="chkValidNgDisabledOne"><label for="chkValidNgDisabledOne">Checked</label></p><p><input rx-checkbox id="chkValidNgDisabledTwo" ng-disabled="true" ng-model="chkValidNgDisabledTwo"><label for="chkValidNgDisabledTwo">Unchecked</label></p></td><!-- Valid Disabled --><td><p><input rx-checkbox id="chkValidDisabledOne" disabled="disabled" ng-model="chkValidDisabledOne"><label for="chkValidDisabledOne">Checked</label></p><p><input rx-checkbox id="chkValidDisabledTwo" disabled="disabled" ng-model="chkValidDisabledTwo"><label for="chkValidDisabledTwo">Unchecked</label></p></td></tr><tr><th>Invalid</th><!-- Invalid Enabled --><td><p><input rx-checkbox id="chkInvalidEnabledOne" ng-model="chkInvalidEnabledOne" always-invalid><label for="chkInvalidEnabledOne">Checked</label></p><p><input rx-checkbox id="chkInvalidEnabledTwo" ng-model="chkInvalidEnabledTwo" always-invalid><label for="chkInvalidEnabledTwo">Unchecked</label></p></td><!-- Invalid NG-Disabled --><td><p><input rx-checkbox id="chkInvalidNgDisabledOne" ng-model="chkInvalidNgDisabledOne" ng-disabled="true" always-invalid><label for="chkInvalidNgDisabledOne">Checked</label></p><p><input rx-checkbox id="chkInvalidNgDisabledTwo" ng-model="chkInvalidNgDisabledTwo" ng-disabled="true" always-invalid><label for="chkInvalidNgDisabledTwo">Unchecked</label></p></td><!-- Invalid Disabled --><td><p><input rx-checkbox id="chkInvalidDisabledOne" ng-model="chkInvalidDisabledOne" disabled="disabled" always-invalid><label for="chkInvalidDisabledOne">Checked</label></p><p><input rx-checkbox id="chkInvalidDisabledTwo" ng-model="chkInvalidDisabledTwo" disabled="disabled" always-invalid><label for="chkInvalidDisabledTwo">Unchecked</label></p></td></tr></tbody></table><rx-debug><h3>Plain HTML Checkboxes (for comparison)</h3><p><input type="checkbox" id="plainHtmlNormal" ng-required="true"><label for="plainHtmlNormal">A plain checkbox</label></p><p><input type="checkbox" id="plainHtmlDisabled" disabled="disabled"><label for="plainHtmlDisabled">A plain checkbox (disabled)</label></p><p><input type="checkbox" id="plainHtmlChecked" checked="checked"><label for="plainHtmlChecked">A plain checkbox (checked)</label></p><p><input type="checkbox" id="plainChkRemoveCheckbox" ng-model="plainChkIsRemoved"><label for="plainChkRemoveCheckbox">Remove Following Checkbox:</label><input type="checkbox" checked="checked" id="plainChkRemoveable" ng-if="!plainChkIsRemoved"></p></rx-debug><!-- END: checkboxes --><h3><rx-permalink>Toggle Switches</rx-permalink></h3><ul class="list"><li>You can use the <a href="#/components/rxToggleSwitch">rxToggleSwitch</a> component for toggle switch controls.</li><li>If you intend to use a label element, place it <strong>immediately after the rxToggleSwitch</strong> to style the label when the control is disabled.</li><li><strong class="msg-warn">DO NOT wrap rxToggleSwitch in a label element.</strong></li><li><strong class="msg-info">NOTE:</strong> An rxToggleSwitch does not toggle when clicking its label. However, CSS styles are still applied if the control is disabled within an rxForm.</li><li>For consistency, and future compatibility, assume that rxToggleSwitch and label works as expected.</li></ul><h3><rx-permalink>Radios</rx-permalink></h3><ul class="list"><li>Use the <a href="#/components/rxRadio">rxRadio</a> component for radio controls.</li><li>If you intend to use a label element, place it <strong>immediately after the rxRadio</strong> so that CSS rules may style the label when the control is disabled.</li><li><strong class="msg-warn">DO NOT wrap rxRadio in a label element.</strong></li></ul><rx-example name="forms.radios"></rx-example><h3><rx-permalink>Using a Character Counter</rx-permalink></h3><ul class="list"><li>Character counters provide color feedback to the user in addition to numeric feedback. As a user approaches the character limit, the numeric value turns from gray to yellow, then yellow to red.</li><li>The character counter is already styled and has the correct width needed to be positioned next to a textarea. If you need to change the textarea width, a custom wrapper class and textarea width can be set.</li><li>If you intend to use a counter on text inputs, instead of the more commonly used text area, be aware the framework does not support these fields. You may experience unexpected results. Make sure to test your code.</li><li>See <a href="#/components/rxCharacterCount/">rxCharacterCount</a> for more specific documentation about implementing a counter on a textarea or text input field.</li></ul><h3><rx-permalink>Disabled State</rx-permalink></h3><ul class="list"><li>When an input is disabled, styles are automatically applied to gray out the field with a "not-allowed" pointer style.</li><li>When label rules (seen above) are applied correctly to a radio, checkbox, or toggle switch, the label will also be styled.</li></ul><rx-example name="forms.disabled"></rx-example><!-- BEGIN: rxDatePicker --><h3><rx-permalink>Date Picker</rx-permalink><a class="button xs inline" href="ngdocs/index.html#/api/elements.directive:rxDatePicker/">View API</a><!-- (NOTE) stability: \'PROTOTYPE\' --></h3><rx-notification type="info"><p>This element is designed to be used in conjunction with other picker elements to compose a valid ISO 8601 DateTime string in the format of <code>YYYY-MM-DDTHH:mmZ</code>.</p></rx-notification><ul class="list"><li>This element will generate a <strong>String</strong> in the format of <code>YYYY-MM-DD</code> to be used as the date portion of the ISO 8601 standard DateTime string mentioned above.</li><li>This element will never generate anything other than a String.</li></ul><h4>Simple Example</h4><p>Sometimes, a form may need to prepopulate a value for Date Picker. The example below shows how the element behaves when its model is defaulted to today\'s date. When a different date is selected, a gray circle around the current date provides additional context to users as they find their selection in the date picker.</p><rx-example name="rxDatePicker.simple"></rx-example><h4>Behavior with Empty Model</h4><p>A typical use case is to use rxDatePicker without a default value set. The example below shows how it will behave if you have a blank (empty string) or undefined value for your model.</p><rx-example name="rxDatePicker.empty"></rx-example><h4>Date Picker States</h4><p>Below you\'ll find examples of how <code>Date Picker</code> will appear in different states.</p><table ng-controller="rxDatePickerCtrl"><thead><th></th><th>Enabled</th><th>Disabled</th></thead><tbody><tr><th>Valid</th><td><rx-date-picker id="dpEnabledValid" ng-model="enabledValid"></rx-date-picker></td><td><rx-date-picker id="dpDisabledValid" ng-disabled="true" ng-model="disabledValid"></rx-date-picker></td></tr><tr><th>Invalid</th><td><rx-date-picker id="dpEnabledInvalid" always-invalid ng-model="enabledInvalid"></rx-date-picker></td><td><rx-date-picker id="dpDisabledInvalid" ng-disabled="true" always-invalid ng-model="disabledInvalid"></rx-date-picker></td></tr></tbody></table><!-- END: rxDatePicker --><!-- BEGIN: rxTimePicker --><h3><rx-permalink>Time Picker</rx-permalink><a class="button xs inline" href="ngdocs/index.html#/api/elements.directive:rxTimePicker/">View API</a><!-- (NOTE) stability: \'PROTOTYPE\' --></h3><rx-notification type="info"><p>This element is designed to be used in conjunction with other picker elements to compose a valid ISO 8601 DateTime string in the format of <code>YYYY-MM-DDTHH:mmZ</code>.</p></rx-notification><ul class="list"><li>This element will generate a <strong>String</strong> in the format of <code>HH:mmZ</code> to be used as the time portion of the ISO 8601 standard DateTime string mentioned above.<ul><li><code>HH</code> is the 24-hour format from 00 to 23</li><li><code>mm</code> is the minutes from 00 to 59</li><li><code>Z</code> is the UTC offset that matches <code>[-+]\\d{2}:\\d{2}</code></li></ul></li><li>This element will never generate anything other than a String.</li></ul><h4>Simple Example</h4><rx-example name="rxTimePicker.simple"></rx-example><h4>Time Picker States</h4><p>Below you\'ll find examples of how <code>Time Picker</code> will appear in different states.</p><table ng-controller="rxTimePickerCtrl"><thead><th></th><th>Enabled</th><th>Disabled</th></thead><tbody><tr><th>Valid</th><td><rx-time-picker id="tpEnabledValid" ng-disabled="false" ng-model="enabledValid"></rx-time-picker></td><td><rx-time-picker id="tpDisabledValid" ng-disabled="true" ng-model="disabledValid"></rx-time-picker></td></tr><tr><th>Invalid</th><td><rx-time-picker id="tpEnabledInvalid" always-invalid ng-disabled="false" ng-model="enabledInvalid"></rx-time-picker></td><td><rx-time-picker id="tpDisabledInvalid" ng-disabled="true" always-invalid ng-model="disabledInvalid"></rx-time-picker></td></tr></tbody></table><!-- END: rxTimePicker --><h3><rx-permalink>Form Validation</rx-permalink></h3><ul class="list"><li>EncoreUI is built on Angular and uses ngModel directives for validation. As a result, you will see custom CSS styling if an element has the <code>.ng-invalid</code> and/or <code>.ng-dirty</code> classes, which are dynamically added by ngModel validation logic.</li><li>Some components will style based on both classes being present (typical use case), while others will only use <code>.ng-invalid</code>.</li><li>Creating an EncoreUI-specific design pattern for placement of form validation messages is on our roadmap.</li><li>At present, there are no styles for invalid toggle switches.</li></ul><rx-example name="forms.validation"></rx-example><h2><rx-permalink>Saving Form Data</rx-permalink></h2><h3><rx-permalink>Saving In-Progress Form State</rx-permalink></h3><ul class="list"><li>Saving a form state can help with user experience. You can use rxAutoSave to activate this feature.</li><li>rxAutoSave interacts exclusively with your model layer. Your UI/template code will be unaware that its state is being saved.</li><li>See <a href="#/utilities/rxAutoSave">rxAutoSave</a> for further details.</li></ul><rx-example name="forms.autoSave"></rx-example><h3><rx-permalink>Manual Form Saving</rx-permalink></h3><ul class="list"><li>If you require form data to be completed before submitting, or require interactive form experiences, a conditional save button and notification is used.</li><li>The notification should only be shown after a change has been made to the form, not on page load.</li><li>The subtitle of the page should indicate when the form was last saved and contain the save button.</li></ul><rx-example name="forms.manualSave"></rx-example><h2><rx-permalink>Design Patterns within Encore</rx-permalink></h2><ul class="list"><li>Forms can be used on their own page. You can see this in Encore when you create a new object such as a Cloud Server or a Database under Encore Cloud.</li><li>Forms are also used within modals. You can see this when modifying content that requires form fields such as actions performed on a Cloud Server instance.</li><li>You can use <a href="#/layout/wells">Wells</a> to create additional context for the form.</li></ul><h2><rx-permalink>UI Roadmap / Possible Future-work</rx-permalink></h2><ul class="list"><li>Fleshing out a design pattern for edit states.<ul><li>Up until now, the editing of content has been relegated to using modals to edit individual line items. As a result, different products have handled the concept of an edit state differently.</li><li>There should be conformity for this, but we have not designed a user pattern yet.</li></ul></li></ul></h4>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('Metadata.docs.html',
    '<p>Metadata contains directives to provide consistent styling for the display of metadata information.</p><rx-example name="metadata.simple"></rx-example>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxMetadata.html',
    '<div><h3>Example</h3><rx-metadata><section><rx-meta label="Field Name">Field Value Example</rx-meta><rx-meta label="Another Field Name">Another Field Value Example</rx-meta><rx-meta label="Third Field Name">The Third Field Value Example</rx-meta><rx-meta label="Super Long Value" class="force-word-break">A super long data value with aseeminglyunbreakablewordthatcouldoverflowtonextcolumn</rx-meta><rx-meta label="Short Field Name">A long field value given here to show line break style.</rx-meta></section><section><rx-meta label="Status" id="metaStatus">Active</rx-meta><rx-meta label="RCN">RCN-555-555-555</rx-meta><rx-meta label="Type">Cloud</rx-meta><rx-meta label="Service Level">Managed &rarr; Managed</rx-meta><rx-meta label="Service Type">DevOps &rarr; SysOps</rx-meta></section><section><rx-meta label="Amount">{{ someAmount | currency }}</rx-meta><rx-meta label="Phone Number Field">888 - 888 - 8888</rx-meta><rx-meta label="Date Field">{{ someDate | date:\'MMMM d, yyyy @ HH:mm (UTCZ)\' }}</rx-meta><rx-meta label="Link Field"><a href="#">Link</a></rx-meta><rx-meta label="Data and Link Field">Some data <a href="#">(Link)</a></rx-meta></section></rx-metadata></div>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxNestedElement.docs.html',
    '<p>Helper function to aid in the creation of boilerplate Directive Definition Object definitions required to validate nested custom elements.</p>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxSortUtil.docs.html',
    '<p>Service which provides utility methods for sorting collections.</p>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxStatusColumnIcons.docs.html',
    '<p>Maps internal statuses to <a href="http://fontawesome.io/">FontAwesome icons</a>. Examples of their usage are available on the <a href="#/components/rxStatusColumn">rxStatusColumn demo page</a>.</p>');
}]);

angular.module('demoApp').run(['$templateCache', function($templateCache) {
  $templateCache.put('rxStatusMappings.docs.html',
    '<p>A set of methods for creating mappings to status identifiers used in EncoreUI.</p><rx-example name="rxStatusMappings.simple"></rx-example>');
}]);
