/*
 * Copyright (C) 2011 Flamingo Project (http://www.cloudine.io).
 *
 * This program is free software: you can redistribute it and/or modify
 * it under the terms of the GNU General Public License as published by
 * the Free Software Foundation, either version 3 of the License, or
 * (at your option) any later version.
 *
 * This program is distributed in the hope that it will be useful,
 * but WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
 * GNU General Public License for more details.
 *
 * You should have received a copy of the GNU General Public License
 * along with this program.  If not, see <http://www.gnu.org/licenses/>.
 */

/**
 * HDFS Input Property View
 *
 * @class
 * @extends Flamingo.view.workflowdesigner.property._NODE_INOUT
 * @author <a href="mailto:hrkenshin@gmail.com">Seungbaek Lee</a>
 */
Ext.define('Flamingo.view.workflowdesigner.property.INOUT_HDFS_IN', {
    extend: 'Flamingo.view.workflowdesigner.property._NODE_INOUT',
    alias: 'widget.INOUT_HDFS_IN',

    requires: [
        'Flamingo.view.workflowdesigner.property._DelimiterSelCmbField',
        'Flamingo.view.workflowdesigner.property._FileSelCmbField',
        'Flamingo.view.workflowdesigner.property._BrowserField',
        'Flamingo.view.workflowdesigner.property._MetaBrowserField',
        'Flamingo.view.workflowdesigner.property._ColumnGrid'
    ],

    items: [
        {
            title: message.msg('workflow.title_path_information'),
            xtype: 'form',
            border: false,
            autoScroll: true,
            items: [
                {
                    xtype: 'fieldset',
                    title: message.msg('workflow.common.input.path'),
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%',
                        labelWidth: 100
                    },
                    items: [
                        {
                            name: 'inputPathQualifiers',
                            fieldLabel: message.msg('common.identifier'),
                            readOnly: true
                        },
                        {
                            xtype: '_browserField',
                            name: 'inputPaths'
                        },
                        {
                            xtype: '_delimiterSelCmbField'
                        }
                    ]
                },
                {
                    xtype: 'fieldset',
                    name: 'selectionType',
                    title: message.msg('workflow.title_file_ok_method'),
                    defaultType: 'textfield',
                    defaults: {
                        anchor: '100%',
                        labelWidth: 100
                    },
                    items: [
                        {
                            xtype: '_fileSelCmbField'
                        }
                    ]
                }
            ]
        },
        {
            title: message.msg('workflow.title_col_info'),
            xtype: 'form',
            border: false,
            autoScroll: true,
            defaults: {
                labelWidth: 100
            },
            layout: {
                type: 'vbox',
                align: 'stretch'
            },
            items: [
                {
                    xtype: 'hidden',
                    name: 'outputPathQualifier'
                },
                {
                    xtype: '_metaBrowserField'
                },
                {
                    xtype: '_columnGrid',
                    flex: 1
                }
            ]
        }
    ]
});