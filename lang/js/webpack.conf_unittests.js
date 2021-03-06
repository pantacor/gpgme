/* gpgme.js - Javascript integration for gpgme
 * Copyright (C) 2018 Bundesamt für Sicherheit in der Informationstechnik
 *
 * This file is part of GPGME.
 *
 * GPGME is free software; you can redistribute it and/or modify it
 * under the terms of the GNU Lesser General Public License as
 * published by the Free Software Foundation; either version 2.1 of
 * the License, or (at your option) any later version.
 *
 * GPGME is distributed in the hope that it will be useful, but
 * WITHOUT ANY WARRANTY; without even the implied warranty of
 * MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the GNU
 * Lesser General Public License for more details.
 *
 * You should have received a copy of the GNU Lesser General Public
 * License along with this program; if not, see <https://www.gnu.org/licenses/>.
 * SPDX-License-Identifier: LGPL-2.1+
 *
 * This is the configuration file for building the gpgmejs-Library with webpack
 */
/* global require, module, __dirname */

const path = require('path');

module.exports = {
    entry: './unittests.js',
    mode: 'production',
    output: {
        path: path.resolve(__dirname, 'build'),
        filename: 'gpgmejs_unittests.bundle.js',
        libraryTarget: 'var',
        libraryExport: 'default',
        library: 'Gpgmejs_test'
    }
};
